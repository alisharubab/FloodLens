import type { Metadata } from "next";
import { Fraunces, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

// Display / editorial serif — wordmark + every big headline (THEME.md)
const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  style: ["normal", "italic"],
  axes: ["opsz", "SOFT", "WONK"],
});

// Body / UI sans — prose, stat numbers, labels
const grotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-grotesk",
  display: "swap",
});

// Mono, sparingly — captions, coordinates, dates, metadata.
// NOTE: variable is --font-jetbrains, not --font-mono, so the --font-mono
// token in globals.css can alias it without referencing itself.
const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "FloodLens — through clouds, through night",
  description:
    "A radar's-eye view of the floods cameras couldn't see. How SAR satellites mapped the 2022 Pakistan floods through monsoon cloud and darkness.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${grotesk.variable} ${jetbrains.variable} h-full antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
