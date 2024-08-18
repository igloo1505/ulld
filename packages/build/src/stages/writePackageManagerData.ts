import { PackageManager } from "../classes/packageManager";
import { TargetPaths } from "../classes/paths";
import { PackageManagers } from "../types";

export const writePackageManagerData = (paths: TargetPaths, type: PackageManagers) => {
    let p = new PackageManager(paths, type)
    p.writeData()
}
