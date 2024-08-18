import { PackageManager } from "../classes/packageManager";
import { TargetPaths } from "../classes/paths";
import { PackageManagers } from "../types";

export const writePackageManagerData = (paths: TargetPaths, type: PackageManagers) => {
    console.log("paths, type: ", paths, type)
    let p = new PackageManager(paths, type)
    p.writeData()
}
