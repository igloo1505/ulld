import { filePathGlobPropsSchema } from "../schemas/filePath/filePathInput.js";
import { z } from "zod";
export declare const withForwardSlash: (p: string) => string;
export declare const withForwardSlashOptional: (p?: string) => string | undefined;
export declare const noTrailingSlash: (p: string) => string;
export declare const withTrailingSlash: (p: string) => string;
export declare const makeHref: (s: string) => string;
export declare const noLeadingSlash: (p: string) => string;
export declare const setSlashes: ({ value, leading, trailing, }: {
    value: string;
    leading: boolean;
    trailing: boolean;
}) => string;
export declare const parentDir: (p: string) => string;
export declare const getFilenameFromString: (p: string) => string;
export declare const ensureRootRelative: (p: string, fsRoot: string) => string;
export declare const ensureAbsolute: (p: string, fsRoot: string) => string;
export declare const getParentDirAndFilename: (p: string, ensureRootRelativeParent: boolean | undefined, fsRoot: string) => {
    parent: string;
    filename: string;
};
export declare const fileExtension: (path: string) => string | undefined;
export declare const replacePrefix: (content: string, regex: string, replaceWith?: string) => string;
export declare const replaceAppendix: (content: string, regex: string, replaceWith?: string) => string;
export declare const getFsRootGlob: (props: z.input<typeof filePathGlobPropsSchema>) => Promise<string[] | undefined>;
//# sourceMappingURL=fsUtils.d.ts.map