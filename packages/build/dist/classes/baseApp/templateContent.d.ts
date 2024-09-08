import { FileManager } from "../baseClasses/fileManager.js";
import { TargetPaths } from "../paths.js";
import { SlotDataType } from "@ulld/utilities/slotDataType";
export declare class TemplateContent extends FileManager {
    subPath: string;
    paths: TargetPaths;
    replaceMeRegex: RegExp;
    constructor(subPath: string, paths: TargetPaths);
    getPropsName(componentName: string): string;
    appendExportedType(componentName: string, exportedType: string): void;
    removeREPLACEMEImport(): void;
    appendImport(importString: string): void;
    replaceREPLACEME(componentName: string): void;
    generate(componentImport: string, formattedExport: string, itemData: SlotDataType, exportedProps?: string): void;
}
