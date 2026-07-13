import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

type RouteContext = {
  params: Promise<{
    id: string;
  }>;
};

function createSlug(title: string) {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export async function GET(
  request: Request,
  { params }: RouteContext
) {
  try {
    const { id } = await params;

    const blog = await prisma.blog.findUnique({
      where: { id },
    });

    if (!blog) {
      return NextResponse.json(
        { message: "Blog not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(blog);
  } catch (error) {
    console.error("GET blog error:", error);

    return NextResponse.json(
      {
        message: "Failed to fetch blog",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: Request,
  { params }: RouteContext
) {
  try {
    const { id } = await params;
    const body = await request.json();

    const title = String(body.title || "").trim();
    const excerpt = String(body.excerpt || "").trim();
    const content = String(body.content || "").trim();
    const coverImage = String(body.coverImage || "").trim();
    const category = String(body.category || "Technology").trim();
    const published =
      typeof body.published === "boolean" ? body.published : true;

    if (!title || !excerpt || !content) {
      return NextResponse.json(
        { message: "Title, excerpt and content are required" },
        { status: 400 }
      );
    }

    const currentBlog = await prisma.blog.findUnique({
      where: { id },
    });

    if (!currentBlog) {
      return NextResponse.json(
        { message: "Blog not found" },
        { status: 404 }
      );
    }

    let slug = createSlug(title);

    const blogWithSameSlug = await prisma.blog.findUnique({
      where: { slug },
    });

    if (blogWithSameSlug && blogWithSameSlug.id !== id) {
      slug = `${slug}-${Date.now()}`;
    }

    const updatedBlog = await prisma.blog.update({
      where: { id },
      data: {
        title,
        slug,
        excerpt,
        content,
        coverImage: coverImage || null,
        category,
        published,
      },
    });

    return NextResponse.json({
      success: true,
      message: "Blog updated successfully",
      blog: updatedBlog,
    });
  } catch (error) {
    console.error("PUT blog error:", error);

    return NextResponse.json(
      {
        message: "Failed to update blog",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: Request,
  { params }: RouteContext
) {
  try {
    const { id } = await params;

    const existingBlog = await prisma.blog.findUnique({
      where: { id },
    });

    if (!existingBlog) {
      return NextResponse.json(
        { message: "Blog not found" },
        { status: 404 }
      );
    }

    await prisma.blog.delete({
      where: { id },
    });

    return NextResponse.json({
      success: true,
      message: "Blog deleted successfully",
    });
  } catch (error) {
    console.error("DELETE blog error:", error);

    return NextResponse.json(
      {
        message: "Failed to delete blog",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}