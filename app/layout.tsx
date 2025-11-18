import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";
import MainContent from "@/components/layout/MainContent";
import { FocusModeProvider } from "@/contexts/FocusModeContext";

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
      <body>
        <FocusModeProvider>
          <div className="flex">
            <Sidebar />
            <MainContent>
              <Header />
              <main className="pt-16 p-8">{children}</main>
            </MainContent>
          </div>
        </FocusModeProvider>
      </body>
    </html>
  );
}
