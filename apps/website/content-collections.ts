import { defineCollection, defineConfig } from "@content-collections/core";
// import {
    // createMetaSchema,
    // createDocSchema,
    // transformMDX as td
// } from "@fumadocs/content-collections/configuration";
import { transformMDX } from "#/fumaDocs/transformMdx";

const docs = defineCollection({
    name: "docs",
    directory: "content",
    include: "docs/**/*.mdx",
    schema: (z) => {
        return {
            title: z.string(),
            description: z.string().optional(),
            icon: z.string().optional(),
            full: z.boolean().optional(),
        };
    },
    transform: transformMDX,
});


const metas = defineCollection({
    name: "meta",
    directory: "content",
    include: "docs/**/meta.json",
    parser: "json",
    schema: (z) => {
        return {
            title: z.string().optional(),
            pages: z.array(z.string()).optional(),
            defaultOpen: z.boolean().optional(),
            root: z.boolean().optional(),
        };
    },
});

export default defineConfig({
    collections: [docs, metas],
});
