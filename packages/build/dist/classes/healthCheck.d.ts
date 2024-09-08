import { AppConfigSchemaOutput } from "@ulld/configschema/zod/main";
import { ShellManager } from "./baseClasses/shell.js";
import { EnvManager } from "./envManager.js";
import { TargetPaths } from "./paths.js";
export declare class BuildHealthCheck extends ShellManager {
    paths: TargetPaths;
    env: EnvManager;
    constructor(paths: TargetPaths, env: EnvManager);
    private checkDatabaseEnvVariables;
    canSyncDatabase(appConfig: AppConfigSchemaOutput): boolean;
}
