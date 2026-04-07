"use client";

import useSWR, { mutate } from "swr";
import Link from "next/link";
import { Button, Card, CardContent, Typography, CircularProgress, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function ArticlesPage() {
  const { data: articles, error, isLoading } = useSWR("/api/articles", fetcher);

  const addArticle = async () => {
    try {
      await fetch("/api/articles", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          title: "Нова стаття SWR", 
          content: "Додано через клієнтський інтерфейс!" 
        }),
      });
      alert("Статтю успішно додано до БД!");
      mutate("/api/articles");
    } catch (err) {
      console.error("Failed to add article", err);
    }
  };

  const deleteArticle = async (id: number) => {
    try {
      await fetch(`/api/articles/${id}`, { method: "DELETE" });
      mutate("/api/articles");
    } catch (err) {
      console.error("Failed to delete article", err);
    }
  };

  if (error) return <div className="p-6 text-red-500 text-center">Помилка завантаження бази даних.</div>;

  return (
    <div className="container mx-auto p-6" style={{ minHeight: "100vh" }}>
      <Link href="/dashboard" className="back-link mb-8 inline-flex items-center text-black/80 hover:text-black transition-colors" style={{ textDecoration: "none", fontWeight: "bold" }}>
        <span style={{ marginRight: "8px" }}>←</span> Back to Dashboard
      </Link>
      
      <section className="hero mb-12">
        <div className="icon-large opacity-90 text-5xl mb-4">📄</div>
        <div className="flex justify-between items-end flex-wrap gap-4">
          <div>
            <h1 className="text-4xl font-extrabold mb-2 text-black">Articles</h1>
            <p className="text-black/80">View and manage your database articles in one place.</p>
          </div>
          <Button 
            onClick={addArticle} 
            variant="contained" 
            color="secondary" 
            sx={{ borderRadius: '12px', fontWeight: 'bold', px: 4, textTransform: 'none' }}
          >
            + New Article
          </Button>
        </div>
      </section>
      
      <section className="flex flex-col gap-6">
        {isLoading ? (
          <div className="flex justify-center p-10">
            <CircularProgress color="secondary" />
          </div>
        ) : (
          articles?.map((art: any) => (
            <Card key={art.id} sx={{ 
              background: "rgba(255,255,255,0.7)", 
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(0,0,0,0.1)",
              borderRadius: "20px"
            }}>
              <CardContent className="flex justify-between items-start p-6">
                <div style={{ flex: 1 }}>
                  <Typography variant="h5" sx={{ color: "#5a3ec8", fontWeight: "bold", mb: 1 }}>
                    {art.title}
                  </Typography>
                  <Typography variant="body1" sx={{ color: "#000000" }}>
                    {art.content}
                  </Typography>
                  <Typography variant="caption" sx={{ color: "#444444", display: "block", mt: 2 }}>
                    ID: {art.id} • Created: {new Date(art.createdAt).toLocaleString()}
                  </Typography>
                </div>
                <IconButton 
                  onClick={() => deleteArticle(art.id)} 
                  sx={{ color: "#ff4d4d", "&:hover": { background: "rgba(255,77,77,0.1)" } }}
                >
                  <DeleteIcon />
                </IconButton>
              </CardContent>
            </Card>
          ))
        )}
      </section>
    </div>
  );
}