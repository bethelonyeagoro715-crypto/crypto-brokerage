import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import BottomNav from "@/components/BottomNav";
import TopNav from "@/components/TopNav"; // 👈 Import TopNav
import { ThemeProvider } from "@/components/ThemeProvider";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CryptoTrade",
  description: "Trade. Invest. Grow.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body className={`${inter.className} bg-[#050505] text-gray-100 flex flex-col h-screen overflow-hidden`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          
          {/* Background Lighting */}
          <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
            <div className="absolute top-[-20%] left-[10%] w-[60vw] h-[60vw] bg-cyan-900/10 rounded-full blur-[150px]" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[50vw] h-[50vw] bg-purple-900/10 rounded-full blur-[150px]" />
          </div>

          {/* 👈 REPLACED SIDEBAR WITH TOP NAV */}
          <Suspense fallback={<div className="h-16 border-b border-white/5 bg-[#0a0a0a]/80" />}>
            <TopNav />
          </Suspense>

          <main className="flex-1 h-full overflow-y-auto pb-20 md:pb-0 relative z-10">
            {children}
          </main>
          
          <Suspense fallback={<div className="md:hidden fixed bottom-0 w-full h-16 bg-[#0a0a0a]/80 border-t border-white/10" />}>
            <BottomNav />
          </Suspense>

        </ThemeProvider>
      </body>
    </html>
  );
}