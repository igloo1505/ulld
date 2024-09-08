import { AppConfigSchemaOutput } from "@ulld/configschema/zod/main";
import { NoteType } from "./noteType.js";
import { ShellManager } from "./baseClasses/shell.js";
import { TargetPaths } from "./paths.js";
interface PathItem {
    path: string;
    exists: boolean;
}
export declare class UlldAppConfigManager extends ShellManager {
    targetDir: string;
    isLocalDev: boolean;
    paths: TargetPaths;
    _config?: AppConfigSchemaOutput;
    preferredConfig: "env" | "directory";
    exists: boolean;
    envConfigPath?: PathItem;
    directoryConfigPath?: PathItem;
    selectedConfig?: string;
    directoryConfigPathTemplate: string;
    constructor(targetDir: string, isLocalDev: boolean, paths: TargetPaths);
    get config(): AppConfigSchemaOutput | undefined;
    set config(data: AppConfigSchemaOutput | undefined);
    gather(setConfig?: boolean): AppConfigSchemaOutput | undefined;
    checkDirectoryConfig(): boolean;
    getConfigPath(): string | undefined;
    getValidConfigPaths(): (PathItem | undefined)[];
    getSelectedConfigPath(): Promise<{}>;
    foundMultiple(): boolean;
    getNoteTypes(): NoteType[];
}
export {};
