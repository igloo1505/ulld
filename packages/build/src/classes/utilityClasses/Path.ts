import path from "path";
import fs from "fs";

export class Path {
    exists: boolean;
    constructor(public path: string) {
        this.exists = this.getExists();
    }

    getExists() {
        let e = fs.existsSync(this.path);
        this.exists = e;
        return e;
    }
    readContent() {
        if (!this.exists) return;
        return fs.readFileSync(this.path, { encoding: "utf-8" });
    }

    readJson() {
        let content = this.readContent();
        if (content) {
            return JSON.parse(content);
        }
    }

    writeContent(newContent: string) {
        return fs.writeFileSync(this.path, newContent, { encoding: "utf-8" });
    }

    writeJson(newContent: object) {
        this.writeContent(JSON.stringify(newContent, null, 4));
    }
    copyContentTo(newPath: Path) {
        let originalContent = this.readContent();
        if (originalContent) {
            newPath.writeContent(originalContent);
            return true;
        }
        return false;
    }
}
