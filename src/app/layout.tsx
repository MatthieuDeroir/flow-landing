import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Flow — Your Wellbeing, Your Data, Your Device",
  description:
    "Track mood, sleep, hydration, medication, exercise and more — 100% offline, private by design. Available on Desktop, iOS & Android.",
  keywords: [
    "mood tracker",
    "wellbeing",
    "mental health",
    "habit tracker",
    "sleep tracker",
    "hydration tracker",
    "private",
    "offline",
    "desktop app",
  ],
  openGraph: {
    title: "Flow — Your Wellbeing, Your Data, Your Device",
    description:
      "Track mood, sleep, hydration, medication, exercise and more — 100% offline, private by design.",
    type: "website",
    siteName: "Flow",
  },
  icons: {
    icon: "/icon.svg",
    apple: "/icon-192.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${poppins.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
