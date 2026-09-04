import type { Metadata } from "next";
import { Inter, Rajdhani } from "next/font/google";
import PageBackground from "./components/PageBackground";
import KonamiEasterEgg from "./components/KonamiEasterEgg";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const rajdhani = Rajdhani({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Abhishek Ravinuthala",
  description: "Software Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${rajdhani.variable} h-full antialiased`}
    >
      <body className="relative min-h-full text-slate-lightest">
        <PageBackground />
        {children}
        <KonamiEasterEgg />
      </body>
    </html>
  );
}
