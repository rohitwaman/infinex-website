import { NextResponse } from "next/server";
import { supabaseAdmin } from "../../../lib/supabaseAdmin";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { error } = await supabaseAdmin.from("Contact").insert({
      name: body.name,
      email: body.email,
      message: body.message,
    });

    if (error) throw error;

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact API Error:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}