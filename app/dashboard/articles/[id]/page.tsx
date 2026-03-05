import React from "react";

type Params = { params: { id: string } };

async function getPost(id: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to fetch post " + id);
  return res.json();
}

async function getComments(postId: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`, { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to fetch comments for post " + postId);
  return res.json();
}

export default async function ArticlePage({ params }: Params) {
  const { id } = params;
  const [post, comments] = await Promise.all([getPost(id), getComments(id)]);

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <h2>Comments</h2>
      <ul>
        {comments.slice(0, 5).map((comment: any) => (
          <li key={comment.id}>
            <strong>{comment.name}</strong>: {comment.body}
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function generateStaticParams() {
  return Array.from({ length: 10 }, (_, i) => ({
    id: (i + 1).toString(),
  }));
}