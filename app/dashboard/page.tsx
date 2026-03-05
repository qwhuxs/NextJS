"use client";
import Link from "next/link";

export default function DashboardPage() {
  const cards = [
    { 
      title: "Articles", 
      href: "/dashboard/articles", 
      desc: "View and manage all your articles.",
      icon: "📄"
    },
    { 
      title: "Profile", 
      href: "/dashboard/profile/settings", 
      desc: "Edit your personal information.",
      icon: "👤"
    },
    { 
      title: "Security", 
      href: "/dashboard/profile/security", 
      desc: "Manage your security settings.",
      icon: "🔒"
    },
  ];

  return (
    <div className="flex min-h-screen">
      <nav className="sidebar hidden lg:flex">
        <Link href="/dashboard" className="active">
          <span>📊</span> Dashboard
        </Link>
        <Link href="/dashboard/articles">
          <span>📄</span> Articles
        </Link>
        <Link href="/dashboard/profile/settings">
          <span>👤</span> Profile Settings
        </Link>
        <Link href="/dashboard/profile/security">
          <span>🔒</span> Profile Security
        </Link>
      </nav>
      <main className="flex-1 p-6 container">
        <section className="hero mb-8">
          <h1 className="font-extrabold">Welcome to Your Dashboard</h1>
          <p>Manage your projects, articles, and profile in style.</p>
        </section>
<section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
  {cards.map((c) => (
    <div key={c.title} className="card p-6 w-full max-w-sm"> {/* Додано w-full max-w-sm */}
      <div className="flex flex-col items-center gap-3"> {/* Трохи менше gap */}
        <div className="text-5xl">{c.icon}</div>
        <h3 className="text-2xl font-bold text-[#7c5cf0]">{c.title}</h3>
        <p className="text-[#5a5a5a] text-sm text-center">{c.desc}</p>
        
        {/* Кнопка стала компактнішою */}
        <Link 
          href={c.href} 
          className="bg-[#7c5cf0] text-white py-2 px-6 rounded-full text-sm font-semibold hover:bg-[#9f8af0] transition-all shadow-md hover:shadow-lg"
        >
          Go to {c.title}
        </Link>
      </div>
    </div>
  ))}
</section>
      </main>
    </div>
  );
}