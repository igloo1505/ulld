import { defineCollection, defineConfig } from "@content-collections/core";
import {
  createMetaSchema,
  createDocSchema,
  // transformMDX as td
} from "@fumadocs/content-collections/configuration";
import { transformMDX } from "#/fumaDocs/transformMdx";


const docs = defineCollection({
  name: "docs",
  directory: "content/docs",
  include: "**/*.mdx",
  schema: createDocSchema,
  transform: transformMDX,
});


const metas = defineCollection({
  name: "meta",
  directory: "content/docs",
  include: "**/meta.json",
  schema: createMetaSchema,
});


export default defineConfig({
  collections: [docs, metas],
});

