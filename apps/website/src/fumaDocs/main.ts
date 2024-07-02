import { createMDXSource } from "@fumadocs/content-collections";
import { allDocs, allMetas } from "content-collections";
import { loader, LoaderOptions } from "fumadocs-core/source";
// import { map } from "./map";
// import { z } from "zod";
// import { allDocs, allMeta } from "contentlayer/generated";
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


// const options: LoaderOptions = {
//   rootDir: "docs",
//   baseUrl: "/docs",
//   source: createMDXSource(map, {
//     // schema: {
//     //     frontmatter: documentationFrontMatterSchema,
//     // },
//   }),
// };


export const {
    getPage,
    getPages,
    pageTree,
    getLanguages,
    files: docFiles,
} = loader({
    // rootDir: "docs",
    baseUrl: "/docs",
    source: createMDXSource(allDocs, allMetas),
});

// export const {
//   getPage,
//   getPages,
//   pageTree,
//   getLanguages,
//   files: docFiles,
// } = loader({
//   rootDir: "docs",
//   baseUrl: "/docs",
//   source: createContentlayerSource(allMeta, allDocs),
//   // source: createMDXSource(map),
// });
