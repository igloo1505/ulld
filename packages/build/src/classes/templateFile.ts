import {
    TemplateStringId,
    TemplateStringVariableRecord,
} from "../utils/templateKeys";
import templateData from "../utils/templateStringData.json";
import path from "path";
import fs from "fs";

export class TemplateFile<T extends TemplateStringId> {
    absPath: string;
    itemData: (typeof templateData)["data"][number];
    constructor(public templateKey: T) {
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
    getNewContent(replacements: TemplateStringVariableRecord<T>) {
        let c = this.getFileContent();
        for (const k in replacements) {
            c = c.replaceAll(
                `<<${k}>>`,
                replacements[k as keyof typeof replacements],
            );
        }
        return c;
    }
}
