import { TopBar } from "@/components/store/TopBar";
import { Identity } from "@/components/store/Identity";
import { Previews } from "@/components/store/Previews";
import { Experience } from "@/components/store/Experience";
import { Scale } from "@/components/store/Scale";
import { Projects } from "@/components/store/Projects";
import { Stack } from "@/components/store/Stack";
import { About, Contact } from "@/components/store/Contact";

export default function Home() {
  // Resolved once at build time, so the timeline's open-ended bar reaches the build date.
  const today = new Date();
  const now = today.getFullYear() + today.getMonth() / 12;

  return (
    <>
      <TopBar />
      <main className="mx-auto max-w-[1104px] overflow-x-clip px-5 md:px-8">
        <Identity />
        <Previews />
        <About />
        <Experience now={now} />
        <Scale />
        <Projects />
        <Stack />
      </main>
      <Contact year={today.getFullYear()} />
    </>
  );
}
