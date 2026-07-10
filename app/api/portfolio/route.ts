import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  const projects = await prisma.portfolio.findMany({
    orderBy: { createdAt: "desc" },
  });

  return NextResponse.json(projects);
}

export async function POST(req: Request) {
  const body = await req.json();

  const project = await prisma.portfolio.create({
    data: {
      title: body.title,
      description: body.description,
      tech: body.tech,
      imageUrl: body.imageUrl || "",
      liveUrl: body.liveUrl || "",
    },
  });

  return NextResponse.json(project);
}