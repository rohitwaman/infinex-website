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
    const jobs = await prisma.job.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json(jobs);
  } catch (error) {
    console.error("GET jobs error:", error);

    return NextResponse.json(
      {
        message: "Failed to fetch jobs",
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
    const location = String(body.location || "").trim();
    const type = String(body.type || "").trim();
    const description = String(body.description || "").trim();
    const requirements = String(body.requirements || "").trim();

    if (
      !title ||
      !location ||
      !type ||
      !description ||
      !requirements
    ) {
      return NextResponse.json(
        {
          message:
            "Title, location, type, description and requirements are required",
        },
        { status: 400 }
      );
    }

    let slug = createSlug(title);

    const existingJob = await prisma.job.findUnique({
      where: { slug },
    });

    if (existingJob) {
      slug = `${slug}-${Date.now()}`;
    }

    const job = await prisma.job.create({
      data: {
        title,
        slug,
        location,
        type,
        description,
        requirements,
        active: true,
      },
    });

    return NextResponse.json(
      {
        success: true,
        message: "Job created successfully",
        job,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("POST job error:", error);

    return NextResponse.json(
      {
        message: "Failed to create job",
        error:
          error instanceof Error
            ? error.message
            : "Unknown error",
      },
      { status: 500 }
    );
  }
}