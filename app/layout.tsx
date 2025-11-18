import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI-gorithms - Learn Algorithms with AI",
  description: "Helping people learn data structures and algorithms with AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
