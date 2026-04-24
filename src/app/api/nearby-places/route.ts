import { NextRequest, NextResponse } from "next/server";

const OVERPASS_ENDPOINTS = [
  "https://overpass-api.de/api/interpreter",
  "https://overpass.kumi.systems/api/interpreter",
  "https://overpass.openstreetmap.ru/api/interpreter",
];

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const lat = Number(body.lat);
    const lng = Number(body.lng);
    const osmTag = String(body.osmTag || "");

    if (!lat || !lng || !osmTag || !osmTag.includes("=")) {
      return NextResponse.json(
        { elements: [], error: "Invalid map parameters" },
        { status: 400 },
      );
    }

    const query = `
      [out:json][timeout:25];
      (
        node[${osmTag}](around:2000,${lat},${lng});
        way[${osmTag}](around:2000,${lat},${lng});
        relation[${osmTag}](around:2000,${lat},${lng});
      );
      out center 50;
    `;

    let lastError = "";

    for (const endpoint of OVERPASS_ENDPOINTS) {
      try {
        const res = await fetch(endpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "User-Agent": "RealEstateMap/1.0",
          },
          body: new URLSearchParams({ data: query }),
          cache: "no-store",
        });

        if (!res.ok) {
          lastError = `${endpoint} failed with ${res.status}`;
          continue;
        }

        const data = await res.json();

        return NextResponse.json({
          elements: data.elements || [],
        });
      } catch (err) {
        lastError = err instanceof Error ? err.message : "Overpass failed";
      }
    }

    return NextResponse.json(
      { elements: [], error: lastError || "All Overpass servers failed" },
      { status: 502 },
    );
  } catch {
    return NextResponse.json(
      { elements: [], error: "Server error" },
      { status: 500 },
    );
  }
}
