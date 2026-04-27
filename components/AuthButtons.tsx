"use client"

import { signIn, signOut } from "next-auth/react"

export default function AuthButtons({ logged }: { logged: boolean }) {
  if (!logged) {
    return (
      <div className="space-y-2 mt-4">
        <button
          onClick={() => signIn("google")}
          className="social-btn"
        >
          Google
        </button>

        <button
          onClick={() => signIn("github")}
          className="social-btn"
        >
          GitHub
        </button>
      </div>
    )
  }

  return (
    <button
      onClick={() => signOut()}
      className="btn mt-4"
    >
      Вийти
    </button>
  )
}