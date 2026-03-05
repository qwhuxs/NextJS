"use client";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-animated text-white min-h-screen font-sans">
        {children}
      </body>
    </html>
  );
}