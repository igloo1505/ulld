export declare const optionMap: {
    readonly useLocal: "--use-local";
    readonly here: "--here";
    readonly forceLocalSource: "--force-local-source";
    readonly npm: "--npm";
    readonly pnpm: "--pnpm";
    readonly yarn: "--yarn";
    readonly genDatabase: "--genDatabase";
    readonly clean: "--clean";
};
export declare const branchOptions: {
    main: string;
    staticPrisma: string;
    reactLatest: string;
};
export declare const branchOptionValues: string[];
export declare const stringOptionMap: {
    branch: string;
};
export type BuildOptionsType = {
    [K in keyof typeof optionMap]?: boolean;
} & {
    [J in keyof typeof stringOptionMap]?: string | true;
};
export type BranchValue = typeof branchOptionValues[number];
