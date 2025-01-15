import { Client } from "@notionhq/client";
import React from "react";

export const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

export const fetchPages = React.cache(async () => {
  return notion.databases
    .query({
      database_id: process.env.NOTION_DATABASE_ID!,
      filter: {
        property: "Status",
        status: {
          equals: "Published",
        },
      },
    })
    .catch((error) => {
      console.error("Error fetching pages");
      throw new Error(error);
    });
});
