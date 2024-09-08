import { SupportedFileType } from "@ulld/types/enums";
import { FileData } from "../file/main.js";
export declare class UlldGlob {
    fsRoot: string;
    constructor(fsRoot: string);
    /** Returns paths as absolute paths */
    glob(pattern: string, ignore?: string[], includeDirs?: boolean): string[];
    filePathsOfType(fileType: SupportedFileType): string[];
    filesOfType(fileType: SupportedFileType): FileData[];
}
//# sourceMappingURL=main.d.ts.map