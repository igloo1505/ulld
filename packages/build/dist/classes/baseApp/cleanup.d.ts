import { BuildOutputData, PackageManagers } from "../../types.js";
import { ShellManager } from "../baseClasses/shell.js";
import { TargetPaths } from "../paths.js";
export declare class BuildCleanup extends ShellManager {
    paths: TargetPaths;
    pkgManager: PackageManagers;
    cleanupPaths: string[];
    constructor(paths: TargetPaths, pkgManager: PackageManagers);
    private removeTempBuildDir;
    private removePreCommitHooks;
    private removeCleanupPaths;
    getBuildOutputConfig(): BuildOutputData;
    private setBuildOutputPath;
    runCleanup(): void;
}
