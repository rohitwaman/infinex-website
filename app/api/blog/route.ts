import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

function createSlug(title: string) {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export async function GET() {
  try {
    const blogs = await prisma.blog.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json(blogs);
  } catch (error) {
    console.error("GET blogs error:", error);

    return NextResponse.json(
      {
        message: "Failed to fetch blogs",
        error:
          error instanceof Error
            ? error.message
            : "Unknown error",
      },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const title = String(body.title || "").trim();
    const excerpt = String(body.excerpt || "").trim();
    const content = String(body.content || "").trim();
    const coverImage = String(body.coverImage || "").trim();

    if (!title || !excerpt || !content) {
      return NextResponse.json(
        {
          message:
            "Title, excerpt and content are required",
        },
        { status: 400 }
      );
    }

    let slug = createSlug(title);

    const existing = await prisma.blog.findUnique({
      where: { slug },
    });

    if (existing) {
      slug = `${slug}-${Date.now()}`;
    }

    const blog = await prisma.blog.create({
      data: {
        title,
        slug,
        excerpt,
        content,
        coverImage: coverImage || null,
        published: true,
      },
    });

    return NextResponse.json(
      {
        success: true,
        blog,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("POST blog error:", error);

    return NextResponse.json(
      {
        message: "Failed to create blog",
        error:
          error instanceof Error
            ? error.message
            : "Unknown error",
      },
      { status: 500 }
    );
  }
}