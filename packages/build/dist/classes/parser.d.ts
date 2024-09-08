import { DeveloperConfigOutput, ParserKey } from "@ulld/configschema/developer";
import { TargetPaths } from "./paths.js";
export declare class PluginParser<T extends ParserKey> {
    parserType: T;
    data: DeveloperConfigOutput;
    paths: TargetPaths;
    parserConfig: DeveloperConfigOutput["parsers"][T];
    importName: string;
    constructor(parserType: T, data: DeveloperConfigOutput, paths: TargetPaths);
    applyIndex(idx: number): void;
    getImportString(): string;
}
