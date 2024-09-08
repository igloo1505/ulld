import fs from "fs";
import { TargetPaths } from "../paths.js";
import { ShellManager } from "./shell.js";
import type { TargetPathKeys } from "@ulld/utilities/buildTypes";
interface LineItem {
    content: string;
    index: number;
    appendLine?: boolean;
}
export declare class FileManager extends ShellManager {
    subPath: string;
    paths: TargetPaths;
    content?: string;
    asJson: boolean;
    path: string;
    dirname: string;
    DO_NOT_WRITE_FILE_CONTENT: boolean;
    constructor(subPath: string, paths: TargetPaths, isDir?: boolean);
    getStat(): fs.Stats;
    isDir(): boolean;
    getDirname(isDir?: boolean): string;
    setPath(newPath: string, isDir?: boolean): void;
    mkdirIfNotExists(): void;
    writeContent(content?: string): void;
    exists(): boolean;
    throwIfNotExists(): void;
    getAsJson(): any;
    replaceLinesByIndex(lineItems: LineItem[]): void;
    getContent(): string;
    copyToFile(path: string, throwIfNotExists?: boolean): void;
    getLines(): string[];
    filterLines(cb: (lineContent: string) => boolean): void;
    getImportLines(): LineItem[];
    static fromPathKey(pathKey: TargetPathKeys, paths: TargetPaths): FileManager;
    static fromAbsolutePath(path: string, paths: TargetPaths, isDir?: boolean): FileManager;
}
export {};
