import type { Metadata } from "next";
import { Outfit, JetBrains_Mono } from "next/font/google";
import { HydrationWarningSupressor } from "../components/HydrationWarningSupressor";
import "./globals.css";

import { SpeedInsights } from "@vercel/speed-insights/next";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "raul cabral • dev",
  description: "Raul Cabral Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark" suppressHydrationWarning>
      <body
        className={`${outfit.variable} ${jetbrainsMono.variable} antialiased bg-neutral-950 text-white font-outfit`}
        suppressHydrationWarning
      >
        <HydrationWarningSupressor>{children}</HydrationWarningSupressor>

        <div className="fixed bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-neutral-950 to-transparent pointer-events-none z-40"></div>
      </body>
    </html>
  );
}
