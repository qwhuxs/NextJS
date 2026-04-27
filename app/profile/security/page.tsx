import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import Link from "next/link";
import SecurityClient from "./SecurityClient";

export default async function SecurityPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-[#f5f3ff] to-[#e9e4ff]">

        <div className="bg-white/70 backdrop-blur-xl p-8 rounded-3xl shadow-xl text-center">

          <h1 className="text-xl font-semibold mb-4 text-gray-700">
            🔒 Щоб змінити пароль — потрібно увійти
          </h1>

          <div className="flex gap-3 justify-center">

            <Link
              href="/login"
              className="px-6 py-2 rounded-xl bg-gradient-to-r from-[#7c5cf0] to-[#a88beb] text-white hover:scale-105 transition"
            >
              🔐 Увійти
            </Link>

            <Link
              href="/dashboard"
              className="px-6 py-2 rounded-xl bg-white shadow hover:scale-105 transition"
            >
              🏠 На головну
            </Link>

          </div>
        </div>
      </div>
    );
  }

  return <SecurityClient />;
}