import LoginForm from "./LoginForm";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen
      bg-gradient-to-br from-[#ede9fe] via-[#e0e7ff] to-[#f5f3ff]">

      <LoginForm />

      {/* 🔙 назад */}
      <Link
        href="/dashboard"
        className="mt-4 px-5 py-2 rounded-xl bg-white shadow hover:scale-105 transition"
      >
        ⬅ На головну
      </Link>

    </div>
  );
}