import fs from "fs";
export declare class FileData {
    path: string;
    _isDir?: boolean | undefined;
    dirname: string;
    content?: string;
    constructor(path: string, _isDir?: boolean | undefined);
    getFileName(): string;
    getExtension(): string;
    getStat(): fs.Stats;
    isDir(): boolean;
    getDirname(isDir?: boolean): string;
    mkdirIfNotExists(): void;
    getContent(): string;
    exists(): boolean;
    getLines(): string[];
    filterLines(cb: (lineContent: string) => boolean): void;
    getImportLines(): {
        content: string;
        index: number;
    }[];
    throwIfNotExists(): void;
    getAsJson(): any;
    writeContent(content?: string): void;
}
//# sourceMappingURL=main.d.ts.map