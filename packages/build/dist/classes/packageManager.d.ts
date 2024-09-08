import { PackageManagers } from "../types.js";
import { TargetPaths } from "./paths.js";
export declare class PackageManager {
    paths: TargetPaths;
    type: PackageManagers;
    constructor(paths: TargetPaths, type: PackageManagers);
    writeData(): void;
    private writeNpmrc;
}
