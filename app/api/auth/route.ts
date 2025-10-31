import { NextResponse } from "next/server";

export async function GET() {
  console.log("GET auth request get successfully!!");
  try {
    // await connectDB();

    // const events = await Event.find().sort({ createdAt: -1 });

    return NextResponse.json(
      { message: "GET auth request get successfully" },
      { status: 200 }
    );
  } catch (e) {
    return NextResponse.json(
      { message: "Event fetching failed", error: e },
      { status: 500 }
    );
  }
}
