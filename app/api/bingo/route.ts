import { NextResponse } from "next/server";
import { generateBingoPhrases } from "./bingo";

export async function GET() {
  try {
    const response = generateBingoPhrases(24);
    return NextResponse.json({ response });
  } catch (error) {
    console.error("Error generating bingo data:", error);
    return NextResponse.json(
      { error: "Failed to generate bingo data" },
      { status: 500 }
    );
  }
}
