//?connect to Next.js to get access to the content studio
import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url"; //? This import brings in the `imageUrlBuilder` utility from Sanity's client library.
//? It is used to generate optimized URLs for images stored in the Sanity CMS.
// ?This helps deliver images in the desired size, format, and quality dynamically,
//? making the application more performant and user-friendly.

export const client = createClient({
  projectId: "li4o62ie",
  dataset: "production",
  apiVersion: "2022-03-25",
  useCdn: true,
});

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}
