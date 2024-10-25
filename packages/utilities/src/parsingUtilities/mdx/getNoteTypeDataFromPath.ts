import type {
    MinimalParsableAppConfigOutput,
} from "@ulld/types";


export const sortNoteTypeDataForParsing = <T extends MinimalParsableAppConfigOutput>(
   appConfig: T,
): (T["noteTypes"][number] & {fs: string})[] => {
    return appConfig.noteTypes
        .sort((a, b) => b.fs.length - a.fs.length)
        .map((s) => ({
            ...s,
            fs: s.fs.startsWith("/") ? s.fs.slice(1) : s.fs,
        }));
};

export const getNoteTypeDataFromPath = <T extends MinimalParsableAppConfigOutput>(
    rootRelativePath: string,
    appConfig: T,
    preSortedNoteTypes?: ReturnType<typeof sortNoteTypeDataForParsing>,
): T["noteTypes"][number] | undefined => {
    const sorted = preSortedNoteTypes || sortNoteTypeDataForParsing<T>(appConfig);
    const docTypeData = sorted.find((f) => rootRelativePath.includes(f.fs));
    return docTypeData;
};
