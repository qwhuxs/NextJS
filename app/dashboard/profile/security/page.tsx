import Link from "next/link";

export default function ProfileSecurityPage() {
  return (
    <div className="container">
      <Link href="/dashboard" className="back-link mb-8">
        <span>←</span> Back to Dashboard
      </Link>
      
      <section className="hero">
        <div className="icon-large opacity-90">🔒</div>
        <h1 className="text-3xl font-extrabold mb-2">Profile Security</h1>
        <p className="text-white/90">Manage your security and privacy settings.</p>
      </section>
      
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="card p-8">
          <h2 className="text-2xl font-bold text-primary mb-4">Security Settings</h2>
          <p className="text-secondary">Coming soon...</p>
        </div>
        <div className="card p-8">
          <h2 className="text-2xl font-bold text-primary mb-4">Privacy Controls</h2>
          <p className="text-secondary">Coming soon...</p>
        </div>
      </div>
    </div>
  );
}