import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ArticlesLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const navItems = [
    { href: "/articles/favorite", label: "Favorite Articles" },
    { href: "/articles/create", label: "Create Article" },
  ];

  return (
    <div>
      <header style={{ borderBottom: "1px solid #ccc", padding: "1rem" }}>
        <ul style={{ display: "flex", listStyle: "none", gap: "1rem", padding: 0, margin: 0 }}>
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                style={{
                  fontWeight: pathname === item.href ? "bold" : "normal",
                  color: pathname === item.href ? "green" : "black",
                  textDecoration: "none",
                }}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </header>
      <main style={{ padding: "1rem" }}>{children}</main>
    </div>
  );
}