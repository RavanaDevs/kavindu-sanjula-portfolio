import { getProjects } from "@/lib/database";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const projectsData = await getProjects();
  return NextResponse.json(projectsData, { status: 200 });
}
