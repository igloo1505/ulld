export declare class Path {
    path: string;
    exists: boolean;
    constructor(path: string);
    getExists(): boolean;
    readContent(): string | undefined;
    readJson(): any;
    writeContent(newContent: string): void;
    writeJson(newContent: object): void;
    copyContentTo(newPath: Path): boolean;
}
