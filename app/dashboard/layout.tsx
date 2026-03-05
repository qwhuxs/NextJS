// app/(dashboard)/layout.tsx
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const navItems = [
    { href: "/articles", label: "Articles" },
    { href: "/profile/settings", label: "Profile Settings" },
    { href: "/profile/security", label: "Profile Security" },
  ];

  return (
    <div style={{ display: "flex" }}>
      <nav style={{ width: "200px", padding: "1rem", borderRight: "1px solid #ccc" }}>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {navItems.map((item) => (
            <li key={item.href} style={{ margin: "1rem 0" }}>
              <Link
                href={item.href}
                style={{
                  fontWeight: pathname.startsWith(item.href) ? "bold" : "normal",
                  color: pathname.startsWith(item.href) ? "blue" : "black",
                  textDecoration: "none",
                }}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div style={{ flex: 1, padding: "1rem" }}>{children}</div>
    </div>
  );
}