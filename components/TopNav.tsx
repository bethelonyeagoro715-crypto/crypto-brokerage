"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ChevronDown, User, Wallet, LineChart, ArrowRightLeft, Users, Shield, Zap, TrendingUp, HelpCircle } from "lucide-react";

// Define the Mega-Menu Data
const navData = {
  Markets: {
    columns: [
      {
        title: "Cryptocurrencies",
        items: [
          { name: "Spot Markets", icon: LineChart, href: "/markets" },
          { name: "New Listings", icon: Zap, href: "/markets" },
          { name: "Top Gainers", icon: TrendingUp, href: "/markets" },
        ],
      },
      {
        title: "Derivatives",
        items: [
          { name: "Perpetuals", icon: ArrowRightLeft, href: "/trade" },
          { name: "Funding Rates", icon: Activity, href: "/trade" },
        ],
      },
    ],
  },
  Invest: {
    columns: [
      {
        title: "Automated Investing",
        items: [
          { name: "Copy Trading", icon: Users, href: "/copy-trading" },
          { name: "Auto-Invest (DCA)", icon: Zap, href: "/invest" },
        ],
      },
      {
        title: "Earn",
        items: [
          { name: "Staking", icon: Shield, href: "/earn" },
          { name: "Liquidity Mining", icon: TrendingUp, href: "/earn" },
        ],
      },
    ],
  },
  Portfolio: {
    columns: [
      {
        title: "My Assets",
        items: [
          { name: "Overview", icon: Wallet, href: "/wallet" },
          { name: "Transaction History", icon: ArrowRightLeft, href: "/wallet" },
        ],
      },
      {
        title: "Account",
        items: [
          { name: "Profile & Settings", icon: User, href: "/profile" },
          { name: "KYC Verification", icon: Shield, href: "/kyc" },
        ],
      },
    ],
  },
};

// Quick placeholder for the Activity icon
function Activity(props: any) {
  return <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>;
}

export default function TopNav() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  return (
    <nav className="hidden md:block sticky top-0 z-[100] w-full bg-[#0a0a0a]/80 backdrop-blur-2xl border-b border-white/5 shadow-2xl">
      <div className="max-w-[1600px] mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Left: Logo & Links */}
        <div className="flex items-center gap-8">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-cyan-500/20 border border-cyan-400/50 rounded-lg flex items-center justify-center text-cyan-400 font-bold text-xl group-hover:shadow-[0_0_15px_rgba(34,211,238,0.4)] transition-all">
              ₿
            </div>
            <span className="text-xl font-bold text-white tracking-wide">CryptoTrade</span>
          </Link>

          {/* Nav Items */}
          <div className="flex items-center gap-1">
            {Object.keys(navData).map((menu) => (
              <div 
                key={menu}
                onMouseEnter={() => setActiveMenu(menu)}
                onMouseLeave={() => setActiveMenu(null)}
                className="relative"
              >
                <button className={`flex items-center gap-1 px-4 py-2 rounded-xl text-sm font-semibold transition-colors ${activeMenu === menu ? "text-cyan-400 bg-white/5" : "text-gray-300 hover:text-white hover:bg-white/5"}`}>
                  {menu}
                  <ChevronDown size={14} className={`transition-transform duration-300 ${activeMenu === menu ? "rotate-180" : ""}`} />
                </button>

                {/* Mega Menu Dropdown */}
                <AnimatePresence>
                  {activeMenu === menu && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.98 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-[600px] bg-[#111]/95 backdrop-blur-3xl border border-white/10 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden flex p-6 gap-8"
                    >
                      {navData[menu as keyof typeof navData].columns.map((col, i) => (
                        <div key={i} className="flex-1">
                          <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">{col.title}</h3>
                          <div className="space-y-1">
                            {col.items.map((item) => (
                              <Link 
                                key={item.name} 
                                href={item.href}
                                className="flex items-center gap-3 p-2 rounded-xl text-sm text-gray-300 hover:text-white hover:bg-white/10 transition-all group"
                              >
                                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-cyan-500/20 group-hover:text-cyan-400 transition-colors">
                                  <item.icon size={16} />
                                </div>
                                {item.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                      
                      {/* Promo Panel inside menu */}
                      <div className="w-48 bg-gradient-to-br from-cyan-900/40 to-purple-900/40 rounded-xl border border-white/10 p-4 flex flex-col justify-between">
                        <div>
                          <h4 className="text-white font-bold text-sm mb-1">New to Crypto?</h4>
                          <p className="text-xs text-gray-400 leading-relaxed mb-4">Start your journey with our beginner-friendly guides.</p>
                        </div>
                        <Link href="/learn" className="flex items-center text-xs font-bold text-cyan-400 hover:text-cyan-300">
                          Learn More <ArrowRightLeft size={12} className="ml-1" />
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
            <Link href="/markets" className="px-4 py-2 text-sm font-semibold text-gray-300 hover:text-white transition-colors">Markets</Link>
          </div>
        </div>

        {/* Right: Search & Actions */}
        <div className="flex items-center gap-4">
          {/* Search Bar */}
          <div className="relative w-64 group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-cyan-400 transition-colors" size={16} />
            <input 
              type="text" 
              placeholder="Search coins..." 
              className="w-full bg-[#050505] border border-white/10 rounded-xl py-2 pl-10 pr-12 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 transition-all"
            />
            <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1">
              <kbd className="hidden lg:inline-block px-1.5 py-0.5 bg-white/10 text-[10px] font-bold text-gray-400 rounded">/</kbd>
            </div>
          </div>

          <div className="h-6 w-px bg-white/10 mx-1" />

          <Link href="/wallet" className="flex items-center gap-2 text-sm font-semibold text-gray-300 hover:text-white transition-colors">
            <Wallet size={18} /> Wallet
          </Link>
          
          <Link href="/login" className="px-5 py-2 bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-sm rounded-xl shadow-[0_0_15px_rgba(34,211,238,0.3)] transition-all">
            Log In
          </Link>
        </div>

      </div>
    </nav>
  );
}