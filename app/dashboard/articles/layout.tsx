"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ArticlesLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const navItems = [
    { href: "/dashboard/articles/favorite", label: "Favorite Articles" },
    { href: "/dashboard/articles/create", label: "Create Article" },
  ];

  return (
    <div className="p-6 flex flex-col gap-4">
      <nav>
        <ul className="flex gap-4">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className={pathname === item.href ? "font-bold text-green-500" : "text-black"}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <main className="mt-6">{children}</main>
    </div>
  );
}