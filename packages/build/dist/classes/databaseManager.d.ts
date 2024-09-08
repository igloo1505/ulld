import { EnvManager } from "./envManager.js";
import { BuildHealthCheck } from "./healthCheck.js";
import { TargetPaths } from "./paths.js";
import { ShellManager } from "./baseClasses/shell.js";
import { UlldAppConfigManager } from "./appConfig.js";
import { PackageManagers } from "../types.js";
export declare class DatabaseBuildManager extends ShellManager {
    paths: TargetPaths;
    env: EnvManager;
    health: BuildHealthCheck;
    dbType: "postgres" | "sqlite";
    constructor(paths: TargetPaths, env: EnvManager, health: BuildHealthCheck);
    writePrismaSchema(): void;
    generate(appConfig: UlldAppConfigManager, pkgManager: PackageManagers, migrateDatabase?: boolean): void;
}
