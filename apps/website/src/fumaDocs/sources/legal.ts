import {
    InferMetaType,
    InferPageType,
    loader,
} from "fumadocs-core/source";
import { allLegals } from "content-collections";

const data = loader({
    rootDir: "legal",
    baseUrl: "/legal",
    source: {
        files: allLegals.map((v) => ({ type: "page", data: v, path: v._meta.filePath })),
    },
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

