import path from "path";
import fs from "fs";
interface ExistsParams {
    forceNewRead?: boolean;
    touchIfNotExists?: boolean;
}
export declare class Path {
    #private;
    filePath: string;
    constructor(filePath: string);
    get parsed(): path.ParsedPath;
    /** .../someDir/somePath.html -> somePath */
    fileName(): string;
    /** .../someDir/somePath.html -> .html */
    fileExtension(): string;
    /** .../someDir/somePath.html -> somePath.html */
    fullName(): string;
    /** .../someDir/somePath.html -> .../someDir */
    dir(): string;
    exists({ forceNewRead, touchIfNotExists }?: ExistsParams): boolean;
    mkdir(): void;
    touch(): boolean;
    get stats(): false | fs.Stats;
    pathType(): "dir" | "file" | false;
    logNotExists(): void;
}
export {};
//# sourceMappingURL=main.d.ts.map