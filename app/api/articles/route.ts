import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma"; 

export async function GET() {
  try {
    const articles = await prisma.article.findMany({
      orderBy: {
        createdAt: 'desc', 
      },
    });
    
    return NextResponse.json(articles);
  } catch (error) {
    console.error("Помилка GET:", error);
    return NextResponse.json({ error: "Не вдалося отримати статті" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    if (!body.title) {
      return NextResponse.json({ error: "Title is required" }, { status: 400 });
    }

    const newArticle = await prisma.article.create({
      data: {
        title: body.title,
        content: body.content || "",
      },
    });

    return NextResponse.json(newArticle, { status: 201 });
  } catch (error) {
    console.error("Помилка POST:", error);
    return NextResponse.json({ error: "Не вдалося створити статтю" }, { status: 500 });
  }
}