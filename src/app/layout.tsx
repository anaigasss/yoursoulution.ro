import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Next App",
  description: "A minimal Next.js app ready for Vercel.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

