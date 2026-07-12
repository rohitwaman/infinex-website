import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const projects = await prisma.portfolio.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json(projects);
  } catch (error) {
    console.error("GET portfolio error:", error);

    return NextResponse.json(
      {
        message: "Failed to fetch projects",
        error:
          error instanceof Error
            ? error.message
            : "Unknown database error",
      },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const title = String(body.title || "").trim();
    const description = String(body.description || "").trim();
    const tech = String(body.tech || "").trim();
    const imageUrl = String(body.imageUrl || "").trim();
    const liveUrl = String(body.liveUrl || "").trim();

    if (!title || !description || !tech) {
      return NextResponse.json(
        {
          message: "Title, description and technologies are required",
        },
        { status: 400 }
      );
    }

    const project = await prisma.portfolio.create({
      data: {
        title,
        description,
        tech,
        imageUrl: imageUrl || null,
        liveUrl: liveUrl || null,
      },
    });

    return NextResponse.json(project, { status: 201 });
  } catch (error) {
    console.error("POST portfolio error:", error);

    return NextResponse.json(
      {
        message: "Failed to create project",
        error:
          error instanceof Error
            ? error.message
            : "Unknown database error",
      },
      { status: 500 }
    );
  }
}