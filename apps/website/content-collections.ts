import { defineCollection, defineConfig } from "@content-collections/core";
import type { z as _zod } from "zod";
import { transformMDX } from "./src/fumaDocs/transformMdx";

const utilFields = (z: typeof _zod) => {
    return {
        icon: z.string().optional(),
        description: z.string().optional(),
        created: z
            .union([z.string(), z.date(), z.undefined(), z.null()])
            .optional(),
        updated: z
            .union([z.string(), z.date(), z.undefined(), z.null()])
            .optional(),
        images: z.string().array().optional(),
        tags: z.string().array().default([]),
        priority: z.number().default(5),
        featuredEquation: z.string().optional(),
        blog: z.boolean().default(false),
        sequential: z.number().optional(),
        sequentialId: z.string().optional(),
        title: z.string(),
        full: z.boolean().optional(),
        id: z.string().optional()
    } as any;
};

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

const blog = defineCollection({
    name: "blog",
    directory: "content",
    include: "blog/**/*.mdx",
    schema: (z) => utilFields(z as any),
    transform: transformMDX,
});

const legal = defineCollection({
    name: "legal",
    directory: "content",
    include: "legal/**/*.mdx",
    schema: (z) => {
        return {
            title: z.string().optional(),
            pages: z.array(z.string()).optional(),
            defaultOpen: z.boolean().optional(),
            root: z.boolean().optional(),
            id: z.string().optional(),
        };
    },
    transform: transformMDX,
});

const myNotes = defineCollection({
    name: "myNotes",
    directory: "content",
    include: "myNotes/**/*.mdx",
    schema: (z) => utilFields(z as any),
    transform: transformMDX,
});

const demos = defineCollection({
    name: "demos",
    directory: "content",
    include: "demos/**/*.mdx",
    schema: (z) => utilFields(z as any),
    transform: transformMDX,
});

const brandDocs = defineCollection({
    name: "brand",
    directory: "content",
    include: "brand/**/*.mdx",
    schema: (z) => utilFields(z as any),
    transform: transformMDX,
});

export default defineConfig({
    collections: [docs, metas, blog, legal, myNotes, demos, brandDocs],
});
