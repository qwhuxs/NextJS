import Link from "next/link";

async function getPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", { 
    cache: "no-store" 
  });
  if (!res.ok) throw new Error("Failed to fetch posts");
  return res.json();
}

export default async function ArticlesPage() {
  const posts = await getPosts();

  return (
    <div className="container">
      <Link href="/dashboard" className="back-link mb-8">
        <span>←</span> Back to Dashboard
      </Link>
      
      <section className="hero mb-12">
        <div className="icon-large opacity-90">📄</div>
        <h1 className="text-3xl font-extrabold mb-2">Articles</h1>
        <p className="text-white/90">View and manage all your articles in one place.</p>
      </section>
      
      <section className="flex flex-col gap-4">
        {posts.slice(0, 10).map((post: any) => (
          <article key={post.id} className="article-card">
            <h2 className="article-title">{post.title}</h2>
            <p className="article-body">{post.body}</p>
          </article>
        ))}
      </section>
    </div>
  );
}