import { JsonFile } from "@ulld/utilities/jsonFileClass";
import { PackageJsonType } from "@ulld/utilities/packageJsonType";
import { Path } from "@ulld/fileSystemUtils/path"
import path from "path";
import { LibraryOptions, UserConfig } from "vite";
import { globSync } from "glob";

export const getPackageJsonFile = (_dirName: string) => {
    let packagePath = path.join(_dirName, "package.json");
    let f = new JsonFile<PackageJsonType>(packagePath);
    if (!f.exists()) {
        console.error(
            `Cannot find package.json file relative to the provided directory: ${_dirName}`,
        );
        process.exit(1);
    } else {
        return f;
    }
};

export const getPackageJsonExports = (_dirName: string) => {
    let f = getPackageJsonFile(_dirName);
    return f.getJsonContent()["exports"];
};



const exportValueToSrcString = (data: NonNullable<PackageJsonType["exports"]>[string]) => {
    if (typeof data === "string") {
        let p = new Path(data.replace("/dist/", "/src/"))
        const targetDir = path.dirname(data)
        let newPath = path.join(targetDir, `${p.fileName}`)
        let f = globSync("*.{ts,tsx}", {
            cwd: targetDir
        })
        console.log("f: ", f)
    }
}


const getSourcesPathsFromExportField = (data: PackageJsonType) => {
    let exports = data.exports
    if (!exports) {
        console.error(`No exports field found in the provided json data.`)
        process.exit(1)
    }
    return Object.values(exports).map((x) => exportValueToSrcString(x))
}


/** This is vite specific. */
export const getPackageJsonBasedEntryPoints = (_dirName: string): LibraryOptions => {
    let data = getPackageJsonFile(_dirName)
    // let files = 

}
