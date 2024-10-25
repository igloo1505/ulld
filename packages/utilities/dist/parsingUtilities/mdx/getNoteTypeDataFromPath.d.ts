import type { MinimalParsableAppConfigOutput } from "@ulld/types";
export declare const sortNoteTypeDataForParsing: <T extends MinimalParsableAppConfigOutput>(appConfig: T) => (T["noteTypes"][number] & {
    fs: string;
})[];
export declare const getNoteTypeDataFromPath: <T extends MinimalParsableAppConfigOutput>(rootRelativePath: string, appConfig: T, preSortedNoteTypes?: ReturnType<typeof sortNoteTypeDataForParsing>) => T["noteTypes"][number] | undefined;
//# sourceMappingURL=getNoteTypeDataFromPath.d.ts.map