import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";
import MainContent from "@/components/layout/MainContent";
import MainLayout from "@/components/layout/MainLayout";
import { FocusModeProvider } from "@/contexts/FocusModeContext";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { MobileMenuProvider } from "@/contexts/MobileMenuContext";
import { SearchProvider } from "@/contexts/SearchContext";
import SearchModal from "@/components/search/SearchModal";

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
        <ThemeProvider>
          <FocusModeProvider>
            <MobileMenuProvider>
              <SearchProvider>
                <div className="flex">
                  <Sidebar />
                  <MainContent>
                    <Header />
                    <MainLayout>{children}</MainLayout>
                  </MainContent>
                </div>
                <SearchModal />
              </SearchProvider>
            </MobileMenuProvider>
          </FocusModeProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
