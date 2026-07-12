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

    const allowedStatuses = ["New", "Contacted", "Closed"];

    if (!allowedStatuses.includes(body.status)) {
      return NextResponse.json(
        { message: "Invalid status" },
        { status: 400 }
      );
    }

    const contact = await prisma.contact.update({
      where: { id },
      data: {
        status: body.status,
      },
    });

    return NextResponse.json({
      success: true,
      message: "Status updated successfully",
      contact,
    });
  } catch (error) {
    console.error("PATCH contact error:", error);

    return NextResponse.json(
      {
        message: "Failed to update contact",
        error:
          error instanceof Error
            ? error.message
            : "Unknown error",
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

    await prisma.contact.delete({
      where: { id },
    });

    return NextResponse.json({
      success: true,
      message: "Enquiry deleted successfully",
    });
  } catch (error) {
    console.error("DELETE contact error:", error);

    return NextResponse.json(
      {
        message: "Failed to delete enquiry",
        error:
          error instanceof Error
            ? error.message
            : "Unknown error",
      },
      { status: 500 }
    );
  }
}