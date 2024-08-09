import path from "path";
import { PackageManager } from "../packageManager";
import { InternalAppName } from "../../packages/types/src/internalAppNames";
import { PackageJsonType } from "@ulld/utilities/packageJsonType";

const p = new PackageManager();
let targetRoot = process.env.ULLD_SANDBOX_ROOT;
if (!targetRoot) {
    console.error(
        `No ULLD_SANDBOX_ROOT environment variable found. Cannot continue.`,
    );
    process.exit(1);
}

const excludeFromLocalSources: InternalAppName[] = [
    "@ulld/database"
]

let packagePath = path.join(process.env.ULLD_SANDBOX_ROOT!, "package.json")

let data = p.getAppDependenciesFromPackageJsonPath(packagePath)

const deps = data.deps.filter((x) => !excludeFromLocalSources.includes(x.name as InternalAppName))

let newDeps = deps.map((d) => {
    let packageMatch = p.packages.find((a) => a.name === d.name);
    if (packageMatch) {
        d.version = `link:${path.dirname(packageMatch.path)}`;
        console.log(`Set ${d.name} to ${d.version}`);
    }
    return d;
});

let fileContent = data.file.getJsonContent() as PackageJsonType

let newContent = p.setDependencySourcesOfPackageJson(fileContent, newDeps)

data.file.writeContent(newContent)

console.log(`Successfully wrote local sources to sandbox build.`)

process.exit(0);
