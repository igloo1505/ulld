import { PackageManager } from "../classes/packageManager.js";
export const writePackageManagerData = (paths, type) => {
    console.log(`Writing package manager data`);
    let p = new PackageManager(paths, type);
    p.writeData();
    console.log(`Successfully wrote packageManagerData`);
};
