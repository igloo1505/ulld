import fs from "fs";
import path from "path";
import { ShellManager } from "./shell";
import { TargetPaths } from "../paths";
import { TargetPathKeys } from "@ulld/utilities/types";

interface LineItem {
    content: string;
    index: number;
    appendLine?: boolean;
}

export class FileManager extends ShellManager {
    content?: string;
    asJson: boolean;
    path: string;
    dirname: string;
    DO_NOT_WRITE_FILE_CONTENT = true;
    constructor(
        public subPath: string,
        paths: TargetPaths,
        isDir?: boolean
    ) {
        super();
        this.path = path.join(paths.projectRoot, subPath);
        this.dirname = this.getDirname(isDir)
        this.asJson = this.subPath.endsWith(".json");
    }
    getStat(){
        return fs.statSync(this.path)
    }
    isDir(){
       let s = this.getStat() 
        return Boolean(s?.isDirectory())
    }
    getDirname(isDir?: boolean){
        let _isDir = typeof isDir === "boolean" ? isDir : this.isDir()
        if(_isDir){
            return this.path
        } 
        return path.dirname(this.path)
    }
    setPath(newPath: string, isDir?: boolean) {
        this.path = newPath;
        this.dirname = this.getDirname(isDir)
        console.log(`Wtf?`)
    }
    mkdirIfNotExists() {
        console.log("this.dirname: ", this.dirname)
        if (!fs.existsSync(this.dirname)) {
            console.log(`Making dir...`)
            fs.mkdirSync(this.dirname, { recursive: true });
        }
    }
    writeContent(content?: string) {
        let newContent = content || this.content;
        console.log("newContent: ", newContent)
        if (!newContent) {
            return this.logDebug(
                `Not writing file content to ${this.subPath}. No content was read from file and none was provided.`,
            );
        }
        if (this.DO_NOT_WRITE_FILE_CONTENT) {
            this.log(newContent);
        } else {
            this.mkdirIfNotExists()
            this.logVerbose(`Writing content to ${this.path}`);
            fs.writeFileSync(this.path, newContent, { encoding: "utf-8" });
        }
    }
    exists() {
        return fs.existsSync(this.path);
    }
    throwIfNotExists() {
        let exists = this.exists();
        if (!exists) {
            throw new Error(`No file exists at ${this.subPath}. Aborting.`);
        }
    }
    getAsJson() {
        return JSON.parse(this.getContent());
    }
    replaceLinesByIndex(lineItems: LineItem[]) {
        let lines = this.getLines();
        for (const k of lineItems) {
            if (k.appendLine) {
                lines = [
                    ...lines.slice(0, k.index + 1),
                    k.content,
                    ...lines.slice(k.index + 1),
                ];
            } else {
                lines[k.index] = k.content;
            }
        }
        this.content = lines.join("\n");
    }
    getContent() {
        if (this.content) return this.content;
        let data = fs.readFileSync(this.path, { encoding: "utf-8" });
        this.content = data;
        return data;
    }
    getLines() {
        return this.getContent().split("\n");
    }
    filterLines(cb: (lineContent: string) => boolean) {
        let lines = this.getLines().filter((l) => cb(l));
        this.content = lines.join("\n");
    }
    getImportLines() {
        let lines = this.getLines();
        let lineData: LineItem[] = [];
        lines.forEach((l, i) => {
            if (l.trim().startsWith("import")) {
                lineData.push({ content: l, index: i });
            }
        });
        return lineData;
    }
    static fromPathKey(pathKey: TargetPathKeys, paths: TargetPaths) {
        const path = paths[pathKey];
        return new FileManager(paths.makeSubPath(path), paths);
    }
    static fromAbsolutePath(path: string, paths: TargetPaths, isDir?: boolean) {
        let item = new FileManager("", paths, isDir);
        item.setPath(path, isDir)
        return item;
    }
}
