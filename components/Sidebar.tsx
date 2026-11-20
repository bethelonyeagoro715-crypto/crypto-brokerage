"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, LineChart, ArrowRightLeft, Wallet, User, LogOut, Users, ShieldCheck, Download, Upload } from "lucide-react";

const navGroups = [
  {
    title: "MAIN MENU",
    items: [
      { name: "Dashboard", href: "/", icon: Home },
      { name: "Markets", href: "/markets", icon: LineChart },
      { name: "Copy Trading", href: "/copy-trading", icon: Users },
    ]
  },
  {
    title: "FUNDS",
    items: [
      { name: "Deposit", href: "/wallet/deposit", icon: Download },
      { name: "Withdraw", href: "/wallet/withdraw", icon: Upload },
      { name: "Wallet", href: "/wallet", icon: Wallet },
    ]
  }
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden md:flex flex-col w-64 h-full bg-[#0a0a0a]/60 backdrop-blur-3xl border-r border-white/5 sticky top-0 z-50">
      {/* Logo */}
      <div className="p-6 flex items-center gap-3">
        <div className="w-8 h-8 bg-cyan-500/20 border border-cyan-400/50 rounded-lg flex items-center justify-center text-cyan-400 font-bold text-xl shadow-[0_0_15px_rgba(34,211,238,0.4)]">
          ₿
        </div>
        <h1 className="text-xl font-bold text-white tracking-wide">CryptoTrade</h1>
      </div>

      {/* Navigation Groups */}
      <div className="flex-1 px-4 space-y-6 mt-2 overflow-y-auto">
        {navGroups.map((group, idx) => (
          <div key={idx}>
            <h3 className="text-[10px] font-bold text-gray-500 tracking-widest uppercase mb-3 px-4">{group.title}</h3>
            <nav className="space-y-1">
              {group.items.map((item) => {
                const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
                const Icon = item.icon;
                
                return (
                  <Link 
                    key={item.name} 
                    href={item.href}
                    className={`flex items-center gap-3 px-4 py-2.5 rounded-xl transition-all duration-300 ${
                      isActive 
                        ? "bg-white/10 text-cyan-300 border border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]" 
                        : "text-gray-400 hover:bg-white/5 hover:text-white border border-transparent"
                    }`}
                  >
                    <Icon size={18} strokeWidth={isActive ? 2.5 : 2} />
                    <span className="text-sm font-medium">{item.name}</span>
                  </Link>
                );
              })}
            </nav>
          </div>
        ))}
      </div>

      {/* User Profile Card (Like the images) */}
      <div className="p-4 border-t border-white/5">
        <div className="flex items-center justify-between p-3 bg-white/5 rounded-2xl border border-white/5 cursor-pointer hover:bg-white/10 transition-colors">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold shadow-lg shadow-cyan-500/20">
              B
            </div>
            <div>
              <p className="text-sm font-bold text-white leading-tight">Bethel</p>
              <p className="text-[10px] text-gray-400 truncate w-24">bethel@crypto.com</p>
            </div>
          </div>
          <LogOut size={16} className="text-gray-500 hover:text-red-400 transition-colors" />
        </div>
      </div>
    </aside>
  );
}