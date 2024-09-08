import type { WithRequired } from "../../types/utilityTypes.js";
export type FilePathItem = {
    subPath: string;
    globPath?: string;
    forceDirDisplay?: boolean;
    rootGlob?: string;
    allowMultiple?: boolean;
    dirPath?: string;
    includeDirContents?: boolean;
    validate?: (files: string[]) => boolean;
    items?: FilePathItem[];
};
export type AdditionalSourceReplaceKey = "<FILENAME>" | "<PLUGIN_UNIQUE_ID>" | "<NOT_EXISTING_PUBLIC_DIR>" | "<PATH_AFTER>";
type FileItemKey = "style" | "public" | "root";
export type FileItemWithRootGlob = WithRequired<FilePathItem, "rootGlob"> & {
    getOutputPath: (relativeFilePath: string) => string;
};
export declare const fileItems: Record<FileItemKey, FileItemWithRootGlob[]>;
export declare const additionalFilePaths: FilePathItem;
export declare const getFlattenedFileItems: () => FileItemWithRootGlob[];
export {};
//# sourceMappingURL=additionalSourceFileStructure.d.ts.map