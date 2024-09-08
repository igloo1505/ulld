export declare const capitalize: (val: string) => string;
export declare const camelCase: (val: string) => string;
export declare const getFileExtension: (path: string) => string | undefined;
export declare const pathHasExtension: (path: string) => boolean;
export declare const applyFileSuffix: (path: string, extension: `.${string}`) => string;
export declare const removeMathDollarSigns: (_s: string) => string;
export declare const sortStringsBySimilarity: (searchString: string, opts: string[], caseSensitive?: boolean) => {
    similarity: number;
    value: string;
}[];
export declare const getMostSimilarString: (searchString: string, opts: string[], caseSensitive?: boolean) => string;
//# sourceMappingURL=stringUtils.d.ts.map