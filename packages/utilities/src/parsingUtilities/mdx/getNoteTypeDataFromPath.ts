import { AppConfigSchemaOutput } from "@ulld/types";

export const sortNoteTypeDataForParsing = (
    appConfig: AppConfigSchemaOutput,
) => {
    return appConfig.noteTypes
        .sort((a, b) => b.fs.length - a.fs.length)
        .map((s) => ({
            ...s,
            fs: s.fs.startsWith("/") ? s.fs.slice(1) : s.fs,
        }));
};

export const getNoteTypeDataFromPath = (
    rootRelativePath: string,
    appConfig: AppConfigSchemaOutput,
    preSortedNoteTypes?: ReturnType<typeof sortNoteTypeDataForParsing>,
): AppConfigSchemaOutput["noteTypes"][number] | undefined => {
    let sorted = preSortedNoteTypes || sortNoteTypeDataForParsing(appConfig);
    let docTypeData = sorted.find((f) => rootRelativePath.includes(f.fs));
    return docTypeData;
};
