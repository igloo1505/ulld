import { createMDXSource } from "@fumadocs/content-collections";
import { allDocs, allMetas } from "content-collections";
import { InferMetaType, InferPageType, loader, LoaderOptions } from "fumadocs-core/source";
// import { z } from "zod";
// import { createContentlayerSource } from "fumadocs-contentlayer";
// import type { PageTree } from 'fumadocs-core/server';


// const documentationFrontMatterSchema = z.object({
//   title: z.string(),
//   tags: z.string().array().default([]),
//   alias: z.string().array().optional(),
//   description: z.string().optional(),
//   icon: z.string().optional(),
//   full: z.boolean(),
// });


const data = loader({
    // rootDir: "docs",
    baseUrl: "/docs",
    source: createMDXSource(allDocs as any, allMetas),
});

export  const {
    getPage,
    getPages,
    pageTree,
    getLanguages,
    files: docFiles,
} = data




export type Page = InferPageType<typeof data>;
export type Meta = InferMetaType<typeof data>;
