import { TemplateStringId, TemplateStringVariableRecord } from "../utils/templateKeys.js";
import templateData from "../utils/templateStringData.json";
export declare class TemplateFile<T extends TemplateStringId> {
    templateKey: T;
    absPath: string;
    itemData: (typeof templateData)["data"][number];
    constructor(templateKey: T);
    private getFileContent;
    getNewContent(replacements: TemplateStringVariableRecord<T>): string;
}
