interface AdditionalSourceItem {
    sourcePath: string;
    outputPath: string;
    displaySourceString?: string;
    displayOutputString?: string;
    id: string;
}

type AdditionalSourceRecord = Record<string, Omit<AdditionalSourceItem, "id">>;

export type FilePathItem = {
    subPath: string
    globPath?: string
    forceDirDisplay?: boolean
    items?: FilePathItem[]
}

export type AdditionalSourceReplaceKey =
    | "<FILENAME>"
    | "<PLUGIN_UNIQUE_ID>"
    | "<NOT_EXISTING_PUBLIC_DIR>"
    | "<PATH_AFTER>";

export const additionalFilePaths: FilePathItem = {
    subPath: "/",
    items: [
        {
            subPath: "favicon.{ico,png,jpg}"
        },
        {
            subPath: "styles",
            items: [
                {
                    subPath: "index.scss"
                }
            ]
        },
        {
            subPath: "public",
            items: [
                {
                    subPath: "unreserved-public-dir",
                    globPath: "<NOT_EXISTING_PUBLIC_DIR>",
                    items: [
                        {
                            subPath: "**"
                        }
                    ]
                }
            ]
        },
        {
            subPath: "tailwind.config.ts",
        },
        {
            subPath: "anyFilename.bib",
            globPath: "*.bib",
        },
        {
            subPath: "appConfig.ulld.json",
            globPath: "appConfig.ulld.json",
        },
    ]
}

export const additionalSourceFileStructure:
    | AdditionalSourceRecord
    | Record<string, AdditionalSourceRecord> = {
    favicon: {
        sourcePath: "favicon.{ico,png,jpg}",
        outputPath: "public/<FILENAME>",
    },
    styles: {
        sourcePath: "styles/index.scss",
        outputPath: "src/styles/<PLUGIN_UNIQUE_ID>/index.scss",
    },
    public: {
        sourcePath: "public/<NOT_EXISTING_PUBLIC_DIR>/**",
        displaySourceString: "public/unReservedPublicDir/**",
        outputPath: "public/<PATH_AFTER>[public]",
    },
    tailwind: {
        sourcePath: "tailwind.config.ts",
        outputPath: "tailwind.config.ts",
    },
    bib: {
        sourcePath: "*.bib",
        displaySourceString: "anyFilename.bib",
        outputPath: "citations.bib",
    },
};

export const getAdditionalSourcePaths = () => {
    let data: (AdditionalSourceItem & {
        splitSourcePath: string[];
        splitOutputPath: string[];
    })[] = [];
    for (const k in additionalSourceFileStructure) {
        let item =
            additionalSourceFileStructure[
            k as keyof typeof additionalSourceFileStructure
            ];
        data.push({
            ...item,
            id: k,
            splitSourcePath: (item.displaySourceString || item.sourcePath).split("/"),
            splitOutputPath: item.outputPath.split("/"),
        });
    }
    return data;
};

const getResursiveValue = (a: any, keys: string[]) => {
    if (keys.length > 1) {
        return getResursiveValue(a[keys[0]], keys.slice(1));
    }
    return a[keys[0]];
};

const applyRecursiveValue = (a: any, keys: string[], value: any) => {
    let i: number | undefined;
    for (i = 0; i < keys.length - 1; i++) {
        a = a[keys[i]];
    }
    a[keys[i]] = value;
};

const getAdditionalSourceMap = () => {
    let items = getAdditionalSourcePaths();
    let d: AdditionalSourceRecord | Record<string, AdditionalSourceRecord> = {};
    for (const k of items) {
        let cumKeys: string[] = [];
        for (const l of k.splitSourcePath) {
            cumKeys.push(l);
            if (!getResursiveValue(d, cumKeys)) {
                applyRecursiveValue(d, cumKeys, {});
            }
        }
    }
    return d;
};

console.log("getAdditionalSourceMap: ", getAdditionalSourceMap());
