import { NextResponse } from "next/server";

export async function GET() {
    const data = await fetch("https://jsonplaceholder.typicode.com/posts");
    return NextResponse.json(data);
}