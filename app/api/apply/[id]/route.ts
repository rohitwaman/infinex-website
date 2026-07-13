import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

type RouteContext = {
  params: Promise<{
    id: string;
  }>;
};

export async function PATCH(
  request: Request,
  { params }: RouteContext
) {
  try {
    const { id } = await params;
    const body = await request.json();

    const status = String(body.status || "").trim();

    const allowedStatuses = [
      "New",
      "Reviewed",
      "Shortlisted",
      "Rejected",
      "Hired",
    ];

    if (!allowedStatuses.includes(status)) {
      return NextResponse.json(
        {
          message: "Invalid application status",
        },
        { status: 400 }
      );
    }

    const application = await prisma.jobApplication.update({
      where: {
        id,
      },
      data: {
        status,
      },
    });

    return NextResponse.json({
      success: true,
      message: "Status updated successfully",
      application,
    });
  } catch (error) {
    console.error("PATCH application error:", error);

    return NextResponse.json(
      {
        message: "Failed to update application",
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

    await prisma.jobApplication.delete({
      where: {
        id,
      },
    });

    return NextResponse.json({
      success: true,
      message: "Application deleted successfully",
    });
  } catch (error) {
    console.error("DELETE application error:", error);

    return NextResponse.json(
      {
        message: "Failed to delete application",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}