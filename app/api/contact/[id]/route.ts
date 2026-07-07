import { NextResponse } from "next/server";
import { prisma } from "../../../../lib/prisma";

type DeleteContext = {
  params: Promise<{
    id: string;
  }>;
};

export async function DELETE(req: Request, context: DeleteContext) {
  const { id } = await context.params;

  try {
    await prisma.contact.delete({
      where: {
        id: Number(id),
      },
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { success: false, message: "Failed to delete" },
      { status: 500 }
    );
  }
}