import { Client } from "@notionhq/client";

const notion = new Client({ auth: process.env.NOTION_API_KEY });
const databaseId = process.env.NOTION_DATABASE_ID as string;

export async function getProjects() {
  const response = await notion.databases.query({
    database_id: databaseId,
  });

  const data = response.results.map((page) => {
    return {
      id: page.id,
      title: page.properties.title.title[0].plain_text,
      description: page.properties.short_desc.rich_text[0].plain_text,
      image: page.properties.image.files[0].file.url,
      technologies: page.properties.technologies.multi_select.map(
        (item) => item.name
      ),
      category: page.properties.category.rich_text[0].plain_text,
      github: page.properties.github.rich_text[0].plain_text,
      demo: page.properties.demo.rich_text[0].plain_text,
    };
  });

  return data;
}
