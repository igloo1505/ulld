import { SupportedFileType, supportedFileTypes } from "@ulld/types/enums";
import { filePathGlobPropsSchema } from "../schemas/filePath/filePathInput.js";
import { z } from 'zod';
import { AppConfigSchemaOutput } from "@ulld/types";
import "server-only";
interface FsRootGlobProps {
    path: string;
    isSinglePath?: boolean;
    fileTypes?: SupportedFileType | SupportedFileType[];
}
type GlobInput = z.input<typeof filePathGlobPropsSchema>;
export declare class FsRootGlob {
    props: FsRootGlobProps;
    constructor(props: FsRootGlobProps);
    formatFileTypeArrayGlobPattern(fts: (SupportedFileType)[] | typeof supportedFileTypes): string;
    getGlobPattern(defaultOpts?: Partial<GlobInput>): string;
    getFetchOpts(defaultOpts?: Partial<GlobInput>): GlobInput;
    sortResults(vals: string[]): string[];
    getFileMatches(appConfig: AppConfigSchemaOutput, opts?: Partial<GlobInput>): Promise<string[]>;
}
export {};
//# sourceMappingURL=fsRootGlob.d.ts.map