import { frontMatterSchema } from "@ulld/schemas/frontMatter";
import matter from "gray-matter";

// TODO: Make sure to handle other missing transformations in the citations field and other possibly nested classes that were previously handled by zod. packages/schemas/src/api/prismaMdxRelations/mdxNote/classProps.ts
export const mdxNotePropsSchemaTransform = (a: MdxNotePropsSchemaType) => {
        const fm = frontMatterSchema.parse(matter(a.raw));
        return {
            ...a,
            raw: a.raw || a.content,
            importantValues: fm.importantValues,
            frontMatter: fm,
            // floatImages: fm.float,
            quickLinkId: fm.id || a.quickLinkId,
            sequentialKey: fm.sequentialKey || a.sequentialKey,
            sequentialIndex: fm.sequential || a.sequentialIndex,
            // remoteUrl: fm.remote?.url || a.remoteUrl,
            // trackRemote: fm.remote?.track || a.trackRemote,
            topics: [
                ...a.topics,
                ...fm.topics.map((l: string) => new Topic({ value: l })),
            ],
            subjects: [
                ...a.subjects,
                ...fm.subjects.map((l: string) => new Subject({ value: l })),
            ],
            tags: [
                ...a.tags,
                ...fm.tags.map((l: string) => new Tag({ value: l, kanbanId: null })),
            ],
            firstSync: fm.created ? new Date(fm.created) : a.firstSync,
        };
    }
