import { PackageManagers } from "../types.js";
import { PackageJson } from "./baseClasses/pkgJson.js";
export declare class TargetPackageJson extends PackageJson {
    targetDir: string;
    isLocalDev: boolean;
    baseAppGitBranch: string;
    constructor(targetDir: string, isLocalDev: boolean, baseAppGitBranch: string);
    includesUlldDependencies(): boolean;
    write(p: PackageManagers): void;
    installDependencies(forceLocalSource?: boolean, providedPackageManager?: PackageManagers): Promise<void>;
}
