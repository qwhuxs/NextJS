"use client";

import { signOut } from "next-auth/react";

export default function LogoutButton() {
  return (
    <button
      onClick={() => signOut({ callbackUrl: "/login" })}
      className="w-full py-3 rounded-xl font-semibold
        border border-red-300 text-red-500
        hover:bg-red-50 transition"
    >
      🚪 Вийти
    </button>
  );
}