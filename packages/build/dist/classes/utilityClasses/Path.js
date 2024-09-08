import fs from "fs";
export class Path {
    path;
    exists;
    constructor(path) {
        this.path = path;
        this.exists = this.getExists();
    }
    getExists() {
        let e = fs.existsSync(this.path);
        this.exists = e;
        return e;
    }
    readContent() {
        if (!this.exists)
            return;
        return fs.readFileSync(this.path, { encoding: "utf-8" });
    }
    readJson() {
        let content = this.readContent();
        if (content) {
            return JSON.parse(content);
        }
    }
    writeContent(newContent) {
        return fs.writeFileSync(this.path, newContent, { encoding: "utf-8" });
    }
    writeJson(newContent) {
        this.writeContent(JSON.stringify(newContent, null, 4));
    }
    copyContentTo(newPath) {
        let originalContent = this.readContent();
        if (originalContent) {
            newPath.writeContent(originalContent);
            return true;
        }
        return false;
    }
}
