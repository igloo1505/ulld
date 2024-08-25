import { PackageManager } from "../classes/packageManager.js";
import { TargetPaths } from "../classes/paths.js";
import { PackageManagers } from "../types.js";

export const writePackageManagerData = (paths: TargetPaths, type: PackageManagers) => {
    let p = new PackageManager(paths, type)
    p.writeData()
    console.log(`Successfully wrote packageManagerData`)
}
