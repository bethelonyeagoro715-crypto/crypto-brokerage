"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, LineChart, ArrowRightLeft, Wallet, User, Users } from "lucide-react";

const navItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "Markets", href: "/markets", icon: LineChart },
  { name: "Trade", href: "/trade", icon: ArrowRightLeft },
  { name: "Copy", href: "/copy-trading", icon: Users }, // Shortened name for mobile
  { name: "Wallet", href: "/wallet", icon: Wallet },
  { name: "Profile", href: "/profile", icon: User },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="md:hidden fixed bottom-0 w-full bg-[#0a0a0a]/80 backdrop-blur-xl border-t border-white/10 grid grid-cols-6 h-16 pb-safe z-50">
      {navItems.map((item) => {
        const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
        const Icon = item.icon;
        
        return (
          <Link 
            key={item.name} 
            href={item.href}
            className={`flex flex-col items-center justify-center w-full h-full space-y-1 transition-colors ${
              isActive ? "text-cyan-400" : "text-gray-500 hover:text-gray-300"
            }`}
          >
            <Icon size={18} strokeWidth={isActive ? 2.5 : 2} className={isActive ? "drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]" : ""} />
            <span className="text-[9px] font-medium tracking-tight">{item.name}</span>
          </Link>
        );
      })}
    </nav>
  );
}