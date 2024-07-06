import { createMDXSource } from "@fumadocs/content-collections";
import { allDocs, allMetas } from "content-collections";
import { InferMetaType, InferPageType, loader, LoaderOptions } from "fumadocs-core/source";
// import { z } from "zod";
// import { createContentlayerSource } from "fumadocs-contentlayer";
// import type { PageTree } from 'fumadocs-core/server';


const data = loader({
    rootDir: "docs",
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
