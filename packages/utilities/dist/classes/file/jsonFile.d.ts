import { FileData } from "./main.js";
export declare class JsonFile<T extends object = {}> extends FileData {
    path: string;
    constructor(path: string);
    getJsonContent(): T;
    writeContent(content?: string | object, indentation?: number): void;
}
//# sourceMappingURL=jsonFile.d.ts.map