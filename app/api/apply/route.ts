import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const applications = await prisma.jobApplication.findMany({
      include: {
        job: {
          select: {
            id: true,
            title: true,
            slug: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json(applications);
  } catch (error) {
    console.error("GET applications error:", error);

    return NextResponse.json(
      {
        message: "Failed to fetch applications",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const jobId = String(body.jobId || "").trim();
    const name = String(body.name || "").trim();
    const email = String(body.email || "").trim();
    const phone = String(body.phone || "").trim();
    const resumeUrl = String(body.resumeUrl || "").trim();
    const message = String(body.message || "").trim();

    if (!jobId || !name || !email || !phone) {
      return NextResponse.json(
        {
          message: "Job, name, email and phone are required",
        },
        { status: 400 }
      );
    }

    const job = await prisma.job.findUnique({
      where: {
        id: jobId,
      },
    });

    if (!job || !job.active) {
      return NextResponse.json(
        {
          message: "This job is unavailable",
        },
        { status: 404 }
      );
    }

    const application = await prisma.jobApplication.create({
      data: {
        jobId,
        name,
        email,
        phone,
        resumeUrl: resumeUrl || null,
        message: message || null,
        status: "New",
      },
    });

    return NextResponse.json(
      {
        success: true,
        message: "Application submitted successfully",
        application,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("POST application error:", error);

    return NextResponse.json(
      {
        message: "Failed to submit application",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}