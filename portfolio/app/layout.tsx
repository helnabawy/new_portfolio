import type { Metadata, Viewport } from "next";
import { Hanken_Grotesk } from "next/font/google";
import "./globals.css";

const hanken = Hanken_Grotesk({ subsets: ["latin"], variable: "--font-hanken", display: "swap" });

export const metadata: Metadata = {
  title: "Hosam Elnabawy | Senior Mobile Engineer",
  description:
    "Senior Mobile Engineer with over 5 years of experience across iOS, Android and Flutter. Built Najiz for the Ministry of Justice KSA, serving over 4 million users.",
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={hanken.variable}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
