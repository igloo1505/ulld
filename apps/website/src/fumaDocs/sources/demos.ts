import { allDemos } from "content-collections";
import { InferMetaType, InferPageType, loader, LoaderOptions } from "fumadocs-core/source";


const data = loader({
    rootDir: "demos",
    baseUrl: "/demos",
    source: {
        files: allDemos.map((v) => ({ type: "page", data: v, path: v._meta.filePath })),
    },
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
