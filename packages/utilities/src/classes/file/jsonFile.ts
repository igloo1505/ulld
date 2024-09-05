import { FileData } from "./main.js";
import fs from "fs";

export class JsonFile<T extends object = {}> extends FileData {
    constructor(public path: string) {
        super(path, false);
    }
    getJsonContent(): T {
        this.throwIfNotExists();
        return JSON.parse(this.getContent());
    }
    writeContent(content?: string | object, indentation: number = 2): void {
        let newContent = content || this.content;
        if (!newContent) {
            throw new Error(`Cannot write content. No content was found.`);
        }
        if (typeof newContent === "object") {
            newContent = JSON.stringify(newContent, null, indentation);
        }
        fs.writeFileSync(this.path, newContent, { encoding: "utf-8" });
    }
}
