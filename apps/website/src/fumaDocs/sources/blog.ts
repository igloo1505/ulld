import {
    InferMetaType,
    InferPageType,
    loader
} from "fumadocs-core/source";
import { allBlogs, allMetas } from "content-collections";
import { createMDXSource } from "@fumadocs/content-collections";

const data = loader({
    rootDir: "blog",
    baseUrl: "/blog",
    source: createMDXSource(allBlogs as any, allMetas),
});

export const {
    getPage,
    getPages,
    pageTree,
    getLanguages,
    files: docFiles,
} = data;

export type Page = InferPageType<typeof data>;
export type Meta = InferMetaType<typeof data>;
