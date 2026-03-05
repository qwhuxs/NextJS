import React, { Suspense } from "react";

async function getPost(id: number) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch post " + id);
  }

  return res.json();
}

async function Post({ id }: { id: number }) {
  const post = await getPost(id);

  return (
    <div
      style={{
        border: "1px solid #ccc",
        margin: "1rem 0",
        padding: "1rem",
        borderRadius: "8px",
      }}
    >
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </div>
  );
}

export default function FavoriteArticle({ id }: { id: number }) {
  return (
    <Suspense fallback={<p>Завантаження статті {id}...</p>}>
      <Post id={id} />
    </Suspense>
  );
}