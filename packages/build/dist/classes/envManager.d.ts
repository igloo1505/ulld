import { ShellManager } from "./baseClasses/shell.js";
import { TargetPaths } from "./paths.js";
import { AppConfigSchemaOutput } from "@ulld/configschema/zod/main";
type SupportedDatabaseType = AppConfigSchemaOutput["build"]["database"]["type"];
type SupportedEnvVariableId = "postgresUri" | "postgresNonPooling" | "databaseSchemaLocation" | "sqliteUri" | "additionalSources";
interface EnvItem {
    id: SupportedEnvVariableId;
    variable: string;
    value?: string | ((_paths: TargetPaths) => string);
}
export declare class EnvManager extends ShellManager {
    paths: TargetPaths;
    preferLocal: boolean;
    envItems: EnvItem[];
    globalEnvFileContent?: string;
    globalEnvParedFileData?: object;
    globalEnvPath?: string;
    glovalEnvFileExists: boolean;
    constructor(paths: TargetPaths);
    getPathItem(p: EnvItem["value"]): string | undefined;
    getDatabaseUriVariable(dbType: SupportedDatabaseType): EnvItem;
    hasVariable(id: SupportedEnvVariableId): boolean;
    applyGlobalConfigOverrides(): void;
    toJson(): Record<string, string>;
    writeEnvLocal(): void;
    getEnvItemById(id: SupportedEnvVariableId): EnvItem;
}
export {};
