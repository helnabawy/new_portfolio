import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { CustomCursor } from "@/components/ui/CustomCursor";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hosam Elnabawy | Senior Software Engineer",
  description: "Senior Software Engineer specializing in iOS, Android, and cross-platform mobile development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-zinc-950 text-zinc-200 antialiased min-h-screen flex flex-col`}>
        <CustomCursor />
        <Navbar />
        <main className="flex-grow pt-20">
          {children}
        </main>
      </body>
    </html>
  );
}
