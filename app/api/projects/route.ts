// import { getProjects } from "@/lib/database";
import { fetchPages } from "@/lib/notion";
import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-static"
export const fetchCache = 'force-no-store';

export async function GET(req: NextRequest) {
  try {
    const pages = await fetchPages();

    const projects = pages.results.map((page) => {
      const pageObject = page as PageObjectResponse;
      const properties = pageObject.properties as any;
      const imageUrl =
        pageObject.cover?.type === "external"
          ? pageObject.cover.external.url
          : pageObject.cover?.file.url;
      const publicUrl = pageObject.public_url;

      return {
        id: pageObject.id,
        title: properties.Title.title[0].plain_text,
        image: imageUrl,
        technologies: properties.Tags.multi_select.map(
          (item: any) => item.name
        ),
        category: properties.Category.select.name,
        github: properties.github.url,
        demo: properties.demo.url,
        description: properties.Description.rich_text[0].plain_text
          ? properties.Description.rich_text[0].plain_text
          : "",
        publicUrl: publicUrl,
      };
    });

    return NextResponse.json({ projectsData: projects }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Error", error: error },
      { status: 500 }
    );
  }
}
