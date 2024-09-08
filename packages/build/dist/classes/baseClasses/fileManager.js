import fs from "fs";
import path from "path";
import { ShellManager } from "./shell.js";
export class FileManager extends ShellManager {
    subPath;
    paths;
    content;
    asJson;
    path;
    dirname;
    DO_NOT_WRITE_FILE_CONTENT = process.env.ULLD_INTERNAL_DEVELOPMENT === "true";
    constructor(subPath, paths, isDir) {
        super();
        this.subPath = subPath;
        this.paths = paths;
        this.path = path.join(paths.projectRoot, subPath);
        this.dirname = this.getDirname(isDir);
        this.asJson = this.subPath.endsWith(".json");
    }
    getStat() {
        return fs.statSync(this.path);
    }
    isDir() {
        let s = this.getStat();
        return Boolean(s?.isDirectory());
    }
    getDirname(isDir) {
        let _isDir = typeof isDir === "boolean" ? isDir : this.isDir();
        if (_isDir) {
            return this.path;
        }
        return path.dirname(this.path);
    }
    setPath(newPath, isDir) {
        this.path = newPath;
        this.dirname = this.getDirname(isDir);
    }
    mkdirIfNotExists() {
        if (!fs.existsSync(this.dirname)) {
            fs.mkdirSync(this.dirname, { recursive: true });
        }
    }
    writeContent(content) {
        console.log(`Writing content to ${this.subPath}`);
        let newContent = content || this.content;
        if (!newContent) {
            return this.logDebug(`Not writing file content to ${this.subPath}. No content was read from file and none was provided.`);
        }
        if (this.DO_NOT_WRITE_FILE_CONTENT) {
            this.log(`
--- Begin File ---

${newContent}

--- End File ---
`);
        }
        else {
            this.mkdirIfNotExists();
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
            this.logError(`No file exists at ${this.subPath}. Aborting.`);
            throw new Error(`No file exists at ${this.subPath}. Aborting.`);
        }
    }
    getAsJson() {
        return JSON.parse(this.getContent());
    }
    replaceLinesByIndex(lineItems) {
        let lines = this.getLines();
        for (const k of lineItems) {
            if (k.appendLine) {
                lines = [
                    ...lines.slice(0, k.index + 1),
                    k.content,
                    ...lines.slice(k.index + 1),
                ];
            }
            else {
                lines[k.index] = k.content;
            }
        }
        this.content = lines.join("\n");
    }
    getContent() {
        if (this.content)
            return this.content;
        let data = fs.readFileSync(this.path, { encoding: "utf-8" });
        this.content = data;
        return data;
    }
    copyToFile(path, throwIfNotExists = false) {
        let content = this.getContent();
        const output = FileManager.fromAbsolutePath(path, this.paths, false);
        if (throwIfNotExists) {
            output.throwIfNotExists();
        }
        output.writeContent(content);
        this.logVerbose(`Copied ${this.path} to ${output.path}`);
    }
    getLines() {
        return this.getContent().split("\n");
    }
    filterLines(cb) {
        let lines = this.getLines().filter((l) => cb(l));
        this.content = lines.join("\n");
    }
    getImportLines() {
        let lines = this.getLines();
        let lineData = [];
        lines.forEach((l, i) => {
            let trimmed = l.trim();
            if (trimmed.startsWith("import")) {
                lineData.push({ content: trimmed, index: i });
            }
        });
        return lineData;
    }
    static fromPathKey(pathKey, paths) {
        const path = paths[pathKey];
        return new FileManager(paths.makeSubPath(path), paths);
    }
    static fromAbsolutePath(path, paths, isDir) {
        let item = new FileManager("", paths, isDir);
        item.setPath(path, isDir);
        return item;
    }
}
