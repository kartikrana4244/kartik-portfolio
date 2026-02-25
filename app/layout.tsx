import type { Metadata } from "next";
import "./globals.css";
import { Plus_Jakarta_Sans } from "next/font/google";

const font = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans"
});

export const metadata: Metadata = {
  title: "Kartik Rana | Full Stack Frontend Developer",
  description:
    "Premium portfolio of Kartik Rana, a 17-year-old full stack frontend developer and creative from Gurugram, India."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${font.variable} font-sans bg-[#050509] text-slate-100`}
      >
        <div className="min-h-screen bg-gradient-to-b from-black via-[#050509] to-black relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-glow-gradient opacity-80" />
          <div className="relative z-10">{children}</div>
        </div>
      </body>
    </html>
  );
}

