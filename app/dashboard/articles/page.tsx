import React from "react";

async function getPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to fetch posts");
  return res.json();
}

export default async function ArticlesPage() {
  const posts = await getPosts();

  return (
    <div>
      <h1>Articles Page</h1>
      <ul>
        {posts.slice(0, 10).map((post: any) => (
          <li key={post.id}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}