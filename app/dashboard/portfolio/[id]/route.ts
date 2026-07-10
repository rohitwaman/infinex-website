import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const project = await prisma.portfolio.findUnique({
    where: { id: params.id },
  });

  return NextResponse.json(project);
}

export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  const body = await req.json();

  const project = await prisma.portfolio.update({
    where: { id: params.id },
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

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  await prisma.portfolio.delete({
    where: { id: params.id },
  });

  return NextResponse.json({ success: true });
}