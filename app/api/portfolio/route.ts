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
      { message: "Failed to fetch projects" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    if (!body.title || !body.description || !body.tech) {
      return NextResponse.json(
        { message: "Title, description and tech are required" },
        { status: 400 }
      );
    }

    const project = await prisma.portfolio.create({
      data: {
        title: body.title,
        description: body.description,
        tech: body.tech,
        imageUrl: body.imageUrl || null,
        liveUrl: body.liveUrl || null,
      },
    });

    return NextResponse.json(project, { status: 201 });
  } catch (error) {
    console.error("POST portfolio error:", error);

    return NextResponse.json(
      { message: "Failed to create project" },
      { status: 500 }
    );
  }
}