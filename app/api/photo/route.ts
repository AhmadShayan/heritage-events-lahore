import { NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  const name = request.nextUrl.searchParams.get("name")
  const w = request.nextUrl.searchParams.get("w") || "1200"

  if (!name) {
    return NextResponse.json({ error: "Missing name" }, { status: 400 })
  }

  const apiKey = process.env.GOOGLE_PLACES_API_KEY
  if (!apiKey) {
    return NextResponse.json({ error: "No API key" }, { status: 500 })
  }

  const url = `https://places.googleapis.com/v1/${name}/media?key=${apiKey}&maxWidthPx=${w}`

  const res = await fetch(url, { redirect: "follow" })

  if (!res.ok) {
    return NextResponse.json({ error: "Failed to fetch photo" }, { status: 502 })
  }

  const buffer = await res.arrayBuffer()
  const contentType = res.headers.get("content-type") || "image/jpeg"

  return new NextResponse(buffer, {
    headers: {
      "Content-Type": contentType,
      "Cache-Control": "public, max-age=86400, stale-while-revalidate=604800",
    },
  })
}
