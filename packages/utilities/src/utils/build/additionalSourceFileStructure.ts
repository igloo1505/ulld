import path from "path";
import type { WithRequired } from "../../types/utilityTypes";

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

export type AdditionalSourceReplaceKey =
    | "<FILENAME>"
    | "<PLUGIN_UNIQUE_ID>"
    | "<NOT_EXISTING_PUBLIC_DIR>"
    | "<PATH_AFTER>";

type FileItemKey = "style" | "public" | "root";

export type FileItemWithRootGlob = WithRequired<FilePathItem, "rootGlob"> & {
    getOutputPath: (relativeFilePath: string) => string;
};

export const fileItems: Record<FileItemKey, FileItemWithRootGlob[]> = {
    style: [
        {
            subPath: "index.scss",
            rootGlob: "styles/**/*.scss",
            dirPath: "styles",
            validate: (items) => items.includes("styles/index.scss"),
            includeDirContents: true,
            getOutputPath: (filePath) => {
            return `src/styles/userProvided/${filePath.startsWith(`styles${path.sep}`) ? filePath.slice(`styles${path.sep}`.length) : filePath}`
            }
        },
    ],
    public: [
        {
            subPath: "**",
            rootGlob: "public/**",
            dirPath: "public",
            getOutputPath: (filePath) => filePath,
            allowMultiple: true,
        },
    ],
    root: [
        {
            subPath: "tailwind.config.ts",
            rootGlob: "tailwind.config.ts",
            getOutputPath: () => "tailwind.config.ts",
        },
        {
            subPath: "anyFilename.bib",
            globPath: "*.bib",
            rootGlob: "*.bib",
            getOutputPath: (filePath) => filePath,
        },
        {
            subPath: "appConfig.ulld.json",
            globPath: "appConfig.ulld.json",
            rootGlob: "appConfig.ulld.json",
            getOutputPath: () => "appConfig.ulld.json",
        },
        {
            subPath: ".env",
            globPath: ".env",
            rootGlob: ".env",
            getOutputPath: () => ".env.local",
        },
        {
            subPath: "favicon.{ico,png,jpg}",
            rootGlob: "favicon.{ico,png,jpg}",
            getOutputPath: (filePath) => `public/${filePath}`,
        },
    ],
};


export const additionalFilePaths: FilePathItem = {
    subPath: "/",
    items: [
        ...fileItems.root,
        {
            subPath: "styles",
            items: fileItems.style,
        },
        {
            subPath: "public",
            items: [
                {
                    subPath: "unreserved-public-dir",
                    globPath: "<NOT_EXISTING_PUBLIC_DIR>",
                    items: fileItems.public,
                },
            ],
        },
    ],
};

export const getFlattenedFileItems = () => {
    let data: FileItemWithRootGlob[] = [];
    for (const k in fileItems) {
        data = data.concat(fileItems[k as keyof typeof fileItems]);
    }
    return data;
};
