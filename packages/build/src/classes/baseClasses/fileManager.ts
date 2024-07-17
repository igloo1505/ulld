import fs from "fs";
import path from "path";
import { ShellManager } from "./shell";
import { PathKeys, TargetPathKeys, TargetPaths } from "../paths";
import { EventMethodKey } from "../../types";

const DO_NOT_WRITE_FILE_CONTENT = true;

interface LineItem {
    content: string;
    index: number;
    appendLine?: boolean;
}

export class FileManager extends ShellManager {
    content?: string;
    asJson: boolean;
    path: string;
    constructor(
        public subPath: string,
        paths: TargetPaths,
    ) {
        super();
        this.path = path.join(paths.projectRoot, subPath);
        this.asJson = this.subPath.endsWith(".json");
    }
    writeContent() {
        if (!this.content) {
            return this.logDebug(
                `Not writing file content to ${this.subPath}. No content was read from file and none was provided.`,
            );
        }
        if (DO_NOT_WRITE_FILE_CONTENT) {
            this.log(this.content);
        } else {
            fs.writeFileSync(this.path, this.content, { encoding: "utf-8" });
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
}
