import { createMDXSource } from "@fumadocs/content-collections";
import { allDocs, allMetas } from "content-collections";
import { InferMetaType, InferPageType, loader } from "fumadocs-core/source";


const data = loader({
    rootDir: "docs",
    baseUrl: "/docs",
    source: createMDXSource(allDocs as any, allMetas),
});

export const {
    getPage,
    getPages,
    pageTree,
    getLanguages,
    files: docFiles,
} = data

export type Page = InferPageType<typeof data>;
export type Meta = InferMetaType<typeof data>;
