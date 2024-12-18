import { NextRequest } from "next/server";
import { getAll, create } from "@/lib/generic-controllers";

export async function GET(request: NextRequest) {
  return await getAll(request, "/review");
}

export async function POST(req: NextRequest) {
  return await create(req, "/review");
}
