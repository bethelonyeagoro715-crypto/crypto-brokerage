"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, LineChart, ArrowRightLeft, Wallet, User, LogOut } from "lucide-react";

const navItems = [
  { name: "Dashboard", href: "/", icon: Home },
  { name: "Markets", href: "/markets", icon: LineChart },
  { name: "Trade", href: "/trade", icon: ArrowRightLeft },
  { name: "Wallet", href: "/wallet", icon: Wallet },
  { name: "Profile", href: "/profile", icon: User },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden md:flex flex-col w-64 h-full bg-white/5 backdrop-blur-2xl border-r border-white/10 sticky top-0 z-50">
      <div className="p-6 flex items-center gap-3">
        <div className="w-8 h-8 bg-cyan-500/20 border border-cyan-400/50 rounded-lg flex items-center justify-center text-cyan-400 font-bold text-xl shadow-[0_0_15px_rgba(34,211,238,0.4)]">
          ₿
        </div>
        <h1 className="text-xl font-bold text-white tracking-wide">CryptoTrade</h1>
      </div>

      <nav className="flex-1 px-4 space-y-2 mt-4">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;
          
          return (
            <Link 
              key={item.name} 
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                isActive 
                  ? "bg-white/10 text-cyan-300 border border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]" 
                  : "text-gray-400 hover:bg-white/5 hover:text-white border border-transparent"
              }`}
            >
              <Icon size={20} strokeWidth={isActive ? 2.5 : 2} />
              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-white/10">
        <button className="flex items-center gap-3 px-4 py-3 w-full text-red-400 font-medium rounded-xl hover:bg-red-500/10 hover:border-red-500/20 border border-transparent transition-all">
          <LogOut size={20} />
          <span>Log Out</span>
        </button>
      </div>
    </aside>
  );
}