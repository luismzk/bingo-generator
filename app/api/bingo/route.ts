import { NextResponse } from "next/server";

const sampleTexts = [
  "New Year's Resolution",
  "Midnight Kiss",
  "Champagne Toast",
  "Fireworks Display",
  "Ball Drop",
  "Party Hat",
  "Confetti Shower",
  "Countdown Timer",
  "Auld Lang Syne",
  "Fresh Start",
  "Goal Setting",
  "Calendar Flip",
  "Time Square",
  "Celebration Dance",
  "Sparklers",
  "Noisemakers",
  "Balloon Drop",
  "Photo Booth",
  "Party Favors",
  "Midnight Snack",
  "Group Hug",
  "Reflection Time",
  "New Beginnings",
  "Hope & Dreams",
  "Family Gathering",
  "Friends Forever",
  "Memory Making",
  "Gratitude List",
  "Vision Board",
  "Lucky Charm",
  "Wish List",
  "Party Games",
  "Music & Dancing",
  "Special Toast",
  "Surprise Guest",
  "Late Night Fun",
  "Morning After",
  "Year in Review",
  "Future Plans",
  "Celebration Mode",
];

function getRandomTexts(count: number): string[] {
  const shuffled = [...sampleTexts].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

export async function GET() {
  try {
    const response = getRandomTexts(24);
    return NextResponse.json({ response });
  } catch (error) {
    console.error("Error generating bingo data:", error);
    return NextResponse.json(
      { error: "Failed to generate bingo data" },
      { status: 500 }
    );
  }
}
