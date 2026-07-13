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

// GET Single Job
export async function GET(
  request: Request,
  { params }: RouteContext
) {
  try {
    const { id } = await params;

    const job = await prisma.job.findUnique({
      where: { id },
    });

    if (!job) {
      return NextResponse.json(
        { message: "Job not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(job);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { message: "Failed to fetch job" },
      { status: 500 }
    );
  }
}

// UPDATE Job
export async function PUT(
  request: Request,
  { params }: RouteContext
) {
  try {
    const { id } = await params;
    const body = await request.json();

    const title = String(body.title || "").trim();
    const location = String(body.location || "").trim();
    const type = String(body.type || "").trim();
    const description = String(body.description || "").trim();
    const requirements = String(body.requirements || "").trim();
    const active =
      typeof body.active === "boolean"
        ? body.active
        : true;

    let slug = createSlug(title);

    const existing = await prisma.job.findUnique({
      where: { slug },
    });

    if (existing && existing.id !== id) {
      slug = `${slug}-${Date.now()}`;
    }

    const job = await prisma.job.update({
      where: { id },
      data: {
        title,
        slug,
        location,
        type,
        description,
        requirements,
        active,
      },
    });

    return NextResponse.json({
      success: true,
      job,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { message: "Failed to update job" },
      { status: 500 }
    );
  }
}

// DELETE Job
export async function DELETE(
  request: Request,
  { params }: RouteContext
) {
  try {
    const { id } = await params;

    await prisma.job.delete({
      where: { id },
    });

    return NextResponse.json({
      success: true,
      message: "Job deleted successfully",
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { message: "Failed to delete job" },
      { status: 500 }
    );
  }
}