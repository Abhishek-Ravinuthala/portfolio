import type { Metadata } from "next";
import { NTR } from "next/font/google";
import PageBackground from "./components/PageBackground";
import "./globals.css";

const ntr = NTR({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: "400",
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
      className={`${ntr.variable} h-full antialiased`}
    >
      <body className="relative min-h-full text-slate-lightest">
        <PageBackground />
        {children}
      </body>
    </html>
  );
}
