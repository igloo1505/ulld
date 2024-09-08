import templateData from "../utils/templateStringData.json" with { type: "json" };
import path from "path";
import fs from "fs";
export class TemplateFile {
    templateKey;
    absPath;
    itemData;
    constructor(templateKey) {
        this.templateKey = templateKey;
        let itemData = templateData.data.find((f) => f.id === templateKey);
        if (!itemData) {
            throw new Error(`Could not find item data for id ${templateKey}`);
        }
        this.itemData = itemData;
        this.absPath = path.join(templateData.basePath, itemData.path);
    }
    getFileContent() {
        return fs.readFileSync(this.absPath, { encoding: "utf-8" });
    }
    getNewContent(replacements) {
        let c = this.getFileContent();
        for (const k in replacements) {
            c = c.replaceAll(`<<${k}>>`, replacements[k]);
        }
        return c;
    }
}
