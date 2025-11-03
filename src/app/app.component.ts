import { 
  Component, 
  ChangeDetectionStrategy, 
  ElementRef, 
  ViewChild, 
  AfterViewInit, 
  HostListener, 
  NgZone,
  inject,
  signal
} from '@angular/core';
import { CommonModule } from '@angular/common'; 
import {profileData} from '../helpers/data';
import { Particle } from '../helpers/particle';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements AfterViewInit {
  // Data for the portfolio
  public profile = profileData;
  // Canvas and particle properties
  @ViewChild('particleCanvas') private canvasRef!: ElementRef<HTMLCanvasElement>;
  private ctx: CanvasRenderingContext2D | null = null;
  private particlesArray: Particle[] = [];
  private canvasWidth = 0;
  private canvasHeight = 0;
  
  // --- Particle Theme ---
  private themes: { particleColor: string, lineColorBase: string }[] = [
    { particleColor: 'rgba(6, 182, 212, 0.3)', lineColorBase: '6, 182, 212' },   // Cyan
    { particleColor: 'rgba(139, 92, 246, 0.3)', lineColorBase: '139, 92, 246' }, // Violet
    { particleColor: 'rgba(234, 179, 8, 0.3)', lineColorBase: '234, 179, 8' },   // Amber
    { particleColor: 'rgba(34, 197, 94, 0.3)', lineColorBase: '34, 197, 94' },  // Green
    { particleColor: 'rgba(236, 72, 153, 0.3)', lineColorBase: '236, 72, 153' }  // Pink
  ];
  private particleColor: string;
  private lineColorBase: string;
  // --- End Particle Theme ---

  // --- Gemini API State ---
  private apiKey = "AIzaSyD1BmV40y4gafM5IcNxPqZrS8J-HHV6a3c"; 
  aiProjectDetails = signal<Record<string, { details: string | null, isLoading: boolean }>>({});
  // --- End Gemini API State ---

  private ngZone = inject(NgZone);

  constructor() {
    // Select a random theme on component initialization
    const randomTheme = this.themes[Math.floor(Math.random() * this.themes.length)];
    this.particleColor = randomTheme.particleColor;
    this.lineColorBase = randomTheme.lineColorBase;
  }

  ngAfterViewInit(): void {
    if (this.canvasRef) {
      const canvas = this.canvasRef.nativeElement;
      this.ctx = canvas.getContext('2d');
      if (this.ctx) {
        this.setCanvasSize();
        this.initParticles();
        // Run animation loop outside of Angular's zone to prevent change detection cycles
        this.ngZone.runOutsideAngular(() => this.animateParticles());
      }
    }
  }

  @HostListener('window:resize')
  onResize(): void {
    this.setCanvasSize();
    this.initParticles(); // Re-initialize particles for new size
  }

  // --- Gemini API Methods ---

  /**
   * Fetches data from the Gemini API with exponential backoff retry logic.
   */
  private async fetchWithRetry(url: string, options: RequestInit, retries = 3, delay = 1000): Promise<any> {
    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        // Don't retry on client errors, but do on server errors
        if (response.status >= 400 && response.status < 500) {
          console.error('Client error, not retrying:', response.status, response.statusText);
          throw new Error(`Client error: ${response.status}`);
        }
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      if (retries > 0) {
        // This is an instruction-mandated retry, not an error to be logged to console.
        await new Promise(res => setTimeout(res, delay));
        return this.fetchWithRetry(url, options, retries - 1, delay * 2);
      } else {
        console.error('API call failed after retries:', error);
        throw error;
      }
    }
  }

  /**
   * Called from the template to fetch AI details for a project.
   */
  async fetchProjectDetails(projectTitle: string, projectPlatforms: string, projectDescription: string): Promise<void> {
    // Set loading state
    this.aiProjectDetails.update(current => ({
      ...current,
      [projectTitle]: { details: null, isLoading: true }
    }));

    const systemPrompt = "You are a helpful portfolio assistant speaking to a recruiter. Given a mobile project's title, platforms, and description, provide a 2-3 sentence technical summary. Focus on the likely technologies, architecture patterns (like MVVM or MVI), and key challenges (e.g., 'handling secure offline storage for fintech data' or 'managing real-time video streams'). Format the response as a single paragraph.";
    
    const userQuery = `Project: "${projectTitle}"\nPlatforms: "${projectPlatforms}"\nDescription: "${projectDescription}"`;
    
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${this.apiKey}`;
    
    const payload = {
      contents: [{ parts: [{ text: userQuery }] }],
      systemInstruction: {
        parts: [{ text: systemPrompt }]
      },
    };

    try {
      const result = await this.fetchWithRetry(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const text = result.candidates?.[0]?.content?.parts?.[0]?.text;

      if (text) {
        this.aiProjectDetails.update(current => ({
          ...current,
          [projectTitle]: { details: text, isLoading: false }
        }));
      } else {
        throw new Error('No text returned from API.');
      }
    } catch (error) {
      console.error('Error fetching project details:', error);
      this.aiProjectDetails.update(current => ({
        ...current,
        [projectTitle]: { details: 'Sorry, I couldn\'t fetch the details right now.', isLoading: false }
      }));
    }
  }

  /**
   * Formats the AI-generated details, replacing newlines with <br> tags.
   */
  formatAIDetails(details: string | null | undefined): string {
    if (!details) {
      return '';
    }
    // Perform the replacement in the component code, not the template
    return details.replace(/\n/g, '<br>');
  }

  // --- End Gemini API Methods ---


  private setCanvasSize(): void {
    if (this.canvasRef) {
      this.canvasWidth = window.innerWidth;
      this.canvasHeight = window.innerHeight;
      this.canvasRef.nativeElement.width = this.canvasWidth;
      this.canvasRef.nativeElement.height = this.canvasHeight;
    }
  }

  private initParticles(): void {
    this.particlesArray = [];
    const numberOfParticles = (this.canvasWidth * this.canvasHeight) / 9000;
    for (let i = 0; i < numberOfParticles; i++) {
      const size = (Math.random() * 1.5) + 1;
      const x = (Math.random() * ((this.canvasWidth - size * 2) - (size * 2)) + size * 2);
      const y = (Math.random() * ((this.canvasHeight - size * 2) - (size * 2)) + size * 2);
      const directionX = (Math.random() * 0.4) - 0.2;
      const directionY = (Math.random() * 0.4) - 0.2;
      
      this.particlesArray.push(new Particle(x, y, directionX, directionY, size, this.particleColor));
    }
  }

  private animateParticles = (): void => {
    if (this.ctx) {
      this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
      
      for (const particle of this.particlesArray) {
        particle.update(this.canvasWidth, this.canvasHeight);
        particle.draw(this.ctx);
      }
      
      this.connectParticles();
    }
    requestAnimationFrame(this.animateParticles);
  }

  private connectParticles(): void {
    if (!this.ctx) return;
    
    let opacityValue = 1;
    for (let a = 0; a < this.particlesArray.length; a++) {
      for (let b = a + 1; b < this.particlesArray.length; b++) {
        const distance = Math.sqrt(
          (this.particlesArray[a].x - this.particlesArray[b].x) * (this.particlesArray[a].x - this.particlesArray[b].x) +
          (this.particlesArray[a].y - this.particlesArray[b].y) * (this.particlesArray[a].y - this.particlesArray[b].y)
        );

        if (distance < 100) {
          opacityValue = 1 - (distance / 100);
          // Use the dynamic line color
          this.ctx.strokeStyle = `rgba(${this.lineColorBase}, ${opacityValue * 0.2})`;
          this.ctx.lineWidth = 1;
          this.ctx.beginPath();
          this.ctx.moveTo(this.particlesArray[a].x, this.particlesArray[a].y);
          this.ctx.lineTo(this.particlesArray[b].x, this.particlesArray[b].y);
          this.ctx.stroke();
        }
      }
    }
  }
}
