import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> } 
) {
  try {
    const body = await request.json();
    const { id } = await params; 

    const articleId = Number(id);
    
    if (isNaN(articleId)) {
      return NextResponse.json({ error: "Invalid ID format" }, { status: 400 });
    }

    const updatedArticle = await prisma.article.update({
      where: { id: articleId },
      data: {
        title: body.title,
        content: body.content,
      },
    });

    return NextResponse.json(updatedArticle);
  } catch (error: any) {
    return NextResponse.json(
      { error: "Failed to update article", details: error.message },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> } 
) {
  try {
    const { id } = await params; 
    const articleId = Number(id);

    await prisma.article.delete({
      where: { id: articleId },
    });

    return NextResponse.json({ message: "Article deleted successfully" });
  } catch (error: any) {
    return NextResponse.json(
      { error: "Failed to delete article", details: error.message },
      { status: 500 }
    );
  }
}