import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import BottomNav from "@/components/BottomNav";
import Sidebar from "@/components/Sidebar";
import { ThemeProvider } from "@/components/ThemeProvider";

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
      <body className={`${inter.className} bg-[#050505] text-gray-100 flex h-screen overflow-hidden`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          
          {/* Ambient Background Lighting (Very Subtle) */}
          <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
            <div className="absolute top-[-20%] left-[10%] w-[60vw] h-[60vw] bg-cyan-900/20 rounded-full blur-[150px]" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[50vw] h-[50vw] bg-purple-900/20 rounded-full blur-[150px]" />
          </div>

          <div className="flex w-full h-full relative z-10">
            <Sidebar />
            <main className="flex-1 h-full overflow-y-auto pb-20 md:pb-0 relative">
              {children}
            </main>
            <BottomNav />
          </div>

        </ThemeProvider>
      </body>
    </html>
  );
}