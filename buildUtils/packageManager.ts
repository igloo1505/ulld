import { globSync } from "glob";
import fs from "fs";
import path from "path";
import rl from "readline";
import npmFetch from "npm-registry-fetch";
import {PackageJsonType} from "../packages/utilities/src/types/packageJson/packageJsonType"
import {JsonFile} from "../packages/utilities/src/classes/file/jsonFile"
import { InternalAppName } from "../packages/types/src/internalAppNames";

interface Dependency {
    name: string;
    version: string;
    type: (typeof dependencyTypes)[number];
}

const depTypes = [
    "dependencies",
    "peerDependencies",
    "devDependencies",
] as const;

interface ClonedBaseAppInternalDep {
    type: (typeof depTypes)[number];
    name: string;
    version: string;
}

export interface PackageSource {
    name: string;
    content: packageJsonType;
    type: "package" | "app" | "unknown";
    path: string;
    deps: Dependency[];
    modified?: boolean;
    node_modules: string;
    publishConfig?: {
        access?: string;
    };
}

const dependencyTypes = [
    "peerDependencies",
    "devDependencies",
    "dependencies",
] as const;

if (!process.env.ULLD_DEV_ROOT) {
    throw new Error(
        "No ULLD_DEV_ROOT environment variable was found at run time. Monorepo utilities won't work reliably... aborting. ",
    );
}

const glob = () =>
    globSync(`**/package.json`, {
        ignore: "**/node_modules/**",
        cwd: process.env.ULLD_DEV_ROOT,
    }).map((p) => path.join(process.env.ULLD_DEV_ROOT!, p));

class PluginConfig {
    path: string;
    data?: object;
    exists: boolean;
    constructor(_path: string) {
        this.path = _path;
        this.exists = fs.existsSync(_path);
    }
    packageJsonPath() {
        return path.join(path.dirname(this.path), "package.json");
    }
    getData() {
        if (this.exists) {
            this.data = JSON.parse(fs.readFileSync(this.path, { encoding: "utf-8" }));
        }
    }
    static fromPackageJsonPath(packagePath: string) {
        return new PluginConfig(
            path.join(path.dirname(packagePath), "pluginConfig.ulld.json"),
        );
    }
}

export class PackageManager {
    packages: PackageSource[] = [];
    rootPackageJsonPath: string = path.join(__dirname, "../package.json");
    packagePublishedMap: Record<string, boolean> = {};
    testRootPath: string;
    testRootPackageJson: PackageJsonType;
    constructor(
        public root: string = process.env.ULLD_DEV_ROOT!,
        public offline: boolean = true,
    ) {
        if (!process.env.ULLD_TEST_ROOT) {
            throw new Error(
                "No ULLD_TEST_ROOT environment variable found at run time.",
            );
        }
        this.packages = this.collectPackages();
        this.testRootPath = process.env.ULLD_TEST_ROOT;
        this.testRootPackageJson = this.getClonedBaseAppPackageJson();
    }
    getSlotMap() {
        return JSON.parse(
            fs.readFileSync(
                path.join(__dirname, "../packages/utilities/src/utils/slotMap.json"),
                { encoding: "utf-8" },
            ),
        );
    }
    getClonedAppPackageJsonPath() {
        return path.join(this.testRootPath, "package.json");
    }
    getClonedBaseAppPackageJson() {
        let p = this.getClonedAppPackageJsonPath();
        if (!fs.existsSync(p)) {
            throw new Error(
                "No package.json file found in the ULLD_TEST_ROOT path. Cannot gather base app data.",
            );
        }
        return JSON.parse(fs.readFileSync(p, { encoding: "utf-8" }));
    }
    getAppDependenciesFromPackageJsonPath(pkgPath: string) {
        let f = new JsonFile(pkgPath);
        if (!f.exists()) {
            console.error(
                `Cannot find file ${pkgPath} in PackageManager#getAppDependenciesFromPackageJsonPath method. Cannot continue.`,
            );
            process.exit(1);
        }
        let content = f.getJsonContent() as PackageJsonType;
        let deps: ClonedBaseAppInternalDep[] = [];
        for (const depType of depTypes) {
            for (const dep in content[depType]) {
                if (dep.startsWith("@ulld")) {
                    deps.push({
                        name: dep,
                        type: depType,
                        version: content[depType][dep],
                    });
                }
            }
        }
        return { deps, file: f };
    }
    getClonedBaseAppInternalPackages(): ClonedBaseAppInternalDep[] {
        let deps: ClonedBaseAppInternalDep[] = [];
        for (const depType of depTypes) {
            for (const dep in this.testRootPackageJson[depType]) {
                if (dep.startsWith("@ulld")) {
                    deps.push({
                        name: dep,
                        type: depType,
                        version: this.testRootPackageJson[depType][dep],
                    });
                }
            }
        }
        return deps;
    }
    private __removeDepFromPeer(
        name: string | string[],
        replaceWith: "dependencies" | "devDependencies" = "devDependencies",
    ) {
        let names = Array.isArray(name) ? name : [name];
        for (const p of this.packages) {
            let deps: typeof p.deps = p.deps.filter((n) => !(names.includes(n.name) && n.type === "peerDependencies"))
            for (const l of p.deps) {
                if (!(l.type === "peerDependencies" && names.includes(p.name))) {
                    let otherDep = p.deps.find(
                        (x) => x.name === l.name && x.type === replaceWith,
                    );
                    if (!otherDep) {
                        deps.push({
                            ...l,
                            type: replaceWith,
                        });
                    }
                }
            }
            console.log("deps: ", deps)
            p.deps = deps;
        }
    }
    removeDepFromPeer(
        moveToDevDependency: string | string[],
        moveToNormalDependency: string | string[],
        dontReplace: string[] = [],
    ) {
        for (const d of dontReplace) {
            this.removePackageFromAll(d);
        }
        this.__removeDepFromPeer(moveToDevDependency, "devDependencies");
        this.__removeDepFromPeer(moveToNormalDependency, "dependencies");
        console.log("here?: ")
        this.writeModified(true);
    }
    setDependencySourcesOfPackageJson(
        f: PackageJsonType,
        items: ClonedBaseAppInternalDep[],
    ) {
        for (const item of items) {
            if (!f[item.type]) {
                f[item.type] = {};
            }
            (f[item.type] as any)[item.name] = item.version;
        }
        return f;
    }
    setNewClonedAppInternalPackages(items: ClonedBaseAppInternalDep[]) {
        for (const item of items) {
            if (!this.testRootPackageJson[item.type]) {
                this.testRootPackageJson[item.type] = {};
            }
            (this.testRootPackageJson[item.type] as any)[item.name] = item.version;
        }
        this.writeClonedAppPackageJson();
    }
    writeClonedAppPackageJson() {
        let p = this.getClonedAppPackageJsonPath();
        fs.writeFileSync(p, JSON.stringify(this.testRootPackageJson, null, 4), {
            encoding: "utf-8",
        });
    }
    movePackageToPeer(
        packageName: string,
        excludeMonorepoPackages: string[] = [],
    ) {
        let _excludeMonorepoPackages = [
            ...excludeMonorepoPackages,
            "@ulld/website",
        ];
        for (const pkg of this.packages) {
            pkg.deps = pkg.deps.map((d) => {
                if (
                    !_excludeMonorepoPackages.includes(d.name) &&
                    d.type === "dependencies"
                ) {
                    return {
                        ...d,
                        type: "peerDependencies",
                    };
                }
                return d;
            });
        }
    }
    getRootRelativePath(p: string) {
        return `${this.root}/${p.startsWith("/") ? p.slice(1, p.length) : p}`;
    }
    loadJson(p: string) {
        return JSON.parse(fs.readFileSync(p, { encoding: "utf-8" }));
    }
    getPluginConfigs() {
        return this.packages
            .map((p) => PluginConfig.fromPackageJsonPath(p.path))
            .filter((p) => p.exists);
    }
    getType(targetPath: string): PackageSource["type"] {
        return targetPath.includes("ulld/apps")
            ? ("app" as "app")
            : targetPath.includes("ulld/packages")
                ? ("package" as "package")
                : ("unknown" as "unknown");
    }
    getPackageFromPath(targetPath: string) {
        let content = this.loadJson(targetPath);
        let name = content?.name;
        if (name && (name.startsWith("@ulld") || name === "ULLD")) {
            return {
                name,
                type: this.getType(targetPath),
                content: content,
                path: targetPath,
                deps: this.getDependencies(content),
                node_modules: targetPath.replace("package.json", "node_modules"),
            };
        }
    }
    collectPackages(withRoot?: boolean) {
        let packages: PackageSource[] = [];
        let _p = glob();
        let _files = withRoot
            ? [..._p, path.join(__dirname, "../package.json")]
            : _p;
        _files.forEach((a) => {
            let p = this.getPackageFromPath(a);
            if (p) {
                packages.push(p);
            }
        });
        return packages;
    }
    findCircularDependencies() {
        for (const p of this.packages) {
            for (const sp of p.deps) {
                if (sp.name.startsWith("@ulld")) {
                    let subPackage = this.packages.find((x) => x.name === sp.name);
                    if (!subPackage) {
                        console.log(
                            `No package found for ${sp.name} while checking for circular dependencies.`,
                        );
                    } else {
                        for (const sd of subPackage?.deps) {
                            if (sd.name === p.name) {
                                console.log(
                                    `Circular dependency between ${sd.name} and ${p.name}`,
                                );
                            }
                        }
                    }
                }
            }
        }
    }
    getDependencies(content: PackageJsonType) {
        let deps: Dependency[] = [];
        for (const k of dependencyTypes) {
            let o = content[k];
            if (o) {
                Object.keys(o).map((name) => {
                    deps.push({
                        name,
                        version: o[name],
                        type: k as (typeof dependencyTypes)[number],
                    });
                });
            }
        }
        return deps;
    }
    rmDir(p: string) {
        if (fs.existsSync(p)) {
            fs.rmSync(p, { recursive: true });
        }
    }
    rm(p: string) {
        if (fs.existsSync(p)) {
            fs.rmSync(p);
        }
    }
    removeWebsite() {
        this.packages = this.packages.filter((f) => f.name !== "@ulld/websiite");
    }
    addPeerDepsToDevDeps(devToPeer: boolean = false) {
        for (const p of this.packages) {
            let deps = p.deps;
            for (const d of p.deps) {
                if (
                    d.type === "peerDependencies" &&
                    !p.deps.some((x) =>
                        Boolean(x.name === d.name && x.type === "devDependencies"),
                    )
                ) {
                    deps.push({
                        ...d,
                        type: "devDependencies",
                    });
                }
            }
            p.deps = deps;
        }
    }
    writeUpdateReactScript(
        reactVersion: string = "latest",
        nextVersion: string = "latest",
    ) {
        let packages = this.findByDependency("react");
        let peerPackages = packages.filter((f) =>
            f.deps.some((d) =>
                Boolean(
                    ["react", "react-dom"].includes(d.name) &&
                    ["peerDependencies", "devDependencies"].includes(d.type),
                ),
            ),
        );
        let peerNames = peerPackages.map((p) => p.name);
        const filter = packages
            .filter((f) => !peerNames.includes(f.name))
            .map((f) => `--filter=${f.name}`)
            .join(" ");
        const peerFilter = peerPackages.map((f) => `--filter=${f.name}`).join(" ");

        let s = `#!/bin/zsh\n`;
        if (filter.length) {
            s += `
pnpm add next@${nextVersion} react@${reactVersion} react-dom@${reactVersion} ${filter}
`;
        }
        if (peerFilter.length) {
            s += `
pnpm add --save-peer next@${nextVersion} react@${reactVersion} react-dom@${reactVersion} ${peerFilter}

pnpm add -D next@${nextVersion} react@${reactVersion} react-dom@${reactVersion} ${peerFilter}
`;
        }
        if (packages.length) {
            s += `
pnpm add @types/react@${reactVersion} @types/react-dom@${reactVersion} ${packages.map((f) => `--filter=${f.name}`).join(" ")}`;
        }
        const targetFile = path.join(__dirname, "./updateReactAndNext.zsh");
        fs.writeFileSync(targetFile, s, { encoding: "utf-8" });
        console.log(`Update React update script with new package data.`);
        process.exit(0);
    }
    clearNodeModules(dry: boolean = false) {
        let paths = this.packages.map((a) => a.node_modules);
        paths.push(`${this.root}/node_modules`);
        paths.push(path.join(__dirname, "../pnpm-lock.yaml"));
        if (dry) {
            console.log("paths to be removed: ", paths);
        } else {
            for (const p of paths) {
                if (fs.existsSync(p)) {
                    fs.rmSync(p, { recursive: true });
                }
            }
        }
        console.log(
            `Successfully cleared all node_modules directory in ${this.root}`,
        );
        process.exit(0);
    }
    removePackageLock() {
        this.rm(this.getRootRelativePath("pnpm-lock.yaml"));
    }
    writeModified(all: boolean = false, dry: boolean = false) {
        this.sortDependencies();
        let p = all ? this.packages : this.packages.filter((a) => a.modified);
        p.forEach((item) => {
            let data = { ...item };
            for (const k of dependencyTypes) {
                let f: Record<string, string> = {};
                for (const t of data.deps.filter((a) => a.type === k)) {
                    f[t.name] = t.version;
                }
                data.content[k] = f;
            }
            if (!dry) {
                fs.writeFileSync(item.path, JSON.stringify(item.content, null, 4));
            } else {
                console.log(JSON.stringify(data.content, null, 4));
            }
        });
    }
    replaceContentByName(name: string, content: PackageJsonType) {
        this.packages = this.packages.map((a) =>
            a.name === name ? { ...a, content: content, modified: true } : a,
        );
    }
    getFlattenedDeps() {
        let deps: string[] = [];
        for (const k of this.packages) {
            for (const d of k.deps) {
                if (!deps.includes(d.name)) {
                    deps.push(d.name);
                }
            }
        }
        return deps;
    }
    replacePackage(name: string, version: string) {
        this.findByDependency(name).forEach((a) => {
            const match = a.deps.filter((b) => b.name === name);
            let content = a.content;
            match.forEach((u) => {
                if (!content[u.type]) {
                    content[u.type] = {};
                }
                (content[u.type] as any)[name] = version;
            });
            this.replaceContentByName(a.name, content);
        });
    }
    async getPublishedMap() {
        let allDeps = this.getFlattenedDeps();
        let removeDepNames: string[] = [];
        for (const k of allDeps) {
            if (k.startsWith("@ulld")) {
                try {
                    let exists = await npmFetch.json(k);
                    this.packagePublishedMap[k] = true;
                } catch (err) {
                    this.packagePublishedMap[k] = false;
                    if (k !== "@ulld/types") {
                        console.log(
                            `${k} not found in npm repository. Removing from all internal packages.`,
                        );
                        removeDepNames.push(k);
                    }
                }
            }
        }
        for (const k of this.packages) {
            let initialDepLength = k.deps.length;
            k.deps = k.deps.filter((a) => {
                let shouldKeep = !removeDepNames.includes(a.name);
                if (!shouldKeep) {
                    console.log(`Removing ${a.name} from ${k.name}`);
                }
                return shouldKeep;
            });
            let newDepsLength = k.deps.length;
            if (initialDepLength !== newDepsLength) {
                console.log(
                    `${k.name} went from ${initialDepLength} dependencies to ${newDepsLength}.`,
                );
            }
        }
    }
    getProperty(k: keyof (typeof this.packages)[number]) {
        return this.packages.map((a) => a[k]);
    }
    listInvalid() {
        return this.packages.filter((a) => a.type === "unknown").map((a) => a.path);
    }
    names() {
        return this.getProperty("name");
    }
    contents() {
        return this.getProperty("content");
    }
    types() {
        return this.getProperty("type");
    }
    depsByName(monoRepoPackageName: string) {
        return this.packages.find((a) => a.name === monoRepoPackageName)?.deps;
    }
    sortDependencies() {
        for (const p of this.packages) {
            p.deps = p.deps.sort((a, b) => (a.name < b.name ? -1 : 1));
        }
    }
    findByDependency(name: string) {
        return this.packages.filter((a) => a.deps.find((b) => b.name === name));
    }
    printDependencyDetails(name: string) {
        let packages = this.findByDependency(name);
        for (const p of packages) {
            let deps = p.deps.filter((d) => d.name === name);
            console.log(`
---
package: ${p.name}
occurances: ${deps.length}
types: 
${deps.map((d) => `    ${d.type}`).join("\n")}
---
`);
        }
    }
    findByRegex(regexString: string): { package: string; deps: string[] }[] {
        let regex = new RegExp(regexString, "gmi");
        return this.packages
            .map((a) => ({
                package: a.name,
                deps: a.deps.filter((b) => regex.test(b.name)).map((d) => d.name),
            }))
            .filter((c) => c.deps.length);
    }
    filterStringByDependency(name: string) {
        let items = this.findByDependency(name);
        return items.map((a) => `--filter=${a.name}`).join(" ");
    }
    removePackageFromAll(name: string) {
        this.packages = this.packages.map((a) => {
            return {
                ...a,
                deps: a.deps.filter((a) => a.name !== name),
            };
        });
    }
    setPackageManager(pm: string) {
        if (!this.packages.map((f) => f.path).includes(this.rootPackageJsonPath)) {
            let root = this.getPackageFromPath(this.rootPackageJsonPath);
            if (root) {
                this.packages = [...this.packages, root];
            }
        }
        this.packages = this.packages.map((a) => {
            return {
                ...a,
                modified: true,
                content: {
                    ...a.content,
                    packageManager: pm,
                },
            };
        });
    }
    addPackageToAll(
        packageConfig: (typeof this.packages)[number]["deps"][number] = {
            type: "devDependencies",
            name: "@ulld/types",
            version: "workspace:*",
        },
        exclude: string[] = ["@ulld/types"],
    ) {
        for (const k of this.packages) {
            if (!exclude.includes(k.name)) {
                console.log(`Writing ${packageConfig.name} dependency to ${k.name}`);
                k.deps.push(packageConfig);
            }
        }
    }
    setPackageVersion(packageName: string, version: string) {
        for (const pkg of this.packages) {
            pkg.deps = pkg.deps.map((a) => {
                return a.name === packageName
                    ? {
                        ...a,
                        version: version,
                    }
                    : a;
            });
        }
    }
    applyInternalDepsToPackageJson(p: JsonFile<PackageJsonType>, excludePackages: InternalAppName[] = []){
        let data = p.getJsonContent()
        let exclude: InternalAppName[] = ["@ulld/website", ...excludePackages]
        for (const pkg of this.packages) {
            if(!exclude.includes(pkg.name as any) && pkg.content.version){
                if(!(pkg.name in data.dependencies)){
                    console.log(`Adding ${pkg.name} to package.json dependencies.`)
                }
                data.dependencies[pkg.name] = pkg.content.version
            }
        }
        p.content = JSON.stringify(data, null, 2)
        return data
    }
    applyPluginConfigToFiles() {
        console.log(`Applying plugin config files to package.json files property.`);
        for (const k of this.packages) {
            let packageConfigPath = path.join(
                path.dirname(k.path),
                "./pluginConfig.ulld.json",
            );
            let existingFiles = k.content.files || [];
            if (!existingFiles.includes("src")) {
                console.log(`Adding src directory to file paths in ${k.name}`);
                existingFiles.push("src");
            }
            if (!packageConfigPath.includes("eslint")) {
                if (fs.existsSync(packageConfigPath)) {
                    k.content.files = existingFiles.includes("pluginConfig.ulld.json")
                        ? existingFiles
                        : [...existingFiles, "pluginConfig.ulld.json"];
                } else {
                    k.content.files = existingFiles.filter(
                        (f) => f !== "pluginConfig.ulld.json",
                    );
                }
            }
        }
        this.writeModified(true);
    }
    static withoutWebsite() {
        let p = new PackageManager();
        p.removeWebsite();
        return p;
    }
    processArgs(args: string[]) {
        const readLine = rl.createInterface({
            input: process.stdin,
            output: process.stdout,
        });
        console.log(
            `Processing args: \n${args.map((a, i) => `${i + 1}. ${a}`).join("\n")}`,
        );
        if (args[0] === "clearModules") {
            this.clearNodeModules();
            process.exit(0);
        }
        if (args[0] === "findByPackage") {
            readLine.question("What package? ", (packageName) => {
                const found = this.findByDependency(packageName);
                console.log(found.map((f) => `--filter=${f.name}`).join(" "));
                process.exit(0);
            });
        }
        if (args[0] === "findByRegex") {
            readLine.question("What package? ", (packageTest) => {
                const found = this.findByRegex(packageTest);
                console.log(
                    found
                        .map(
                            (f) =>
                                `Package: ${f.package}\n Dependencies:\n-${f.deps.join("\n-")}`,
                        )
                        .join("\n-----\n"),
                );
                console.log(
                    `\n\n ${found.map((f) => `--filter=${f.package}`).join(" ")}`,
                );
                process.exit(0);
            });
        }
        if (args[0] === "updateReactScript") {
            this.writeUpdateReactScript();
            process.exit();
        }
        if (args[0] === "applyPluginConfigToPackageJsonFiles") {
            this.applyPluginConfigToFiles();
            process.exit();
        }
        if (args[0] === "findCircularDependencies") {
            this.findCircularDependencies();
            process.exit();
        }
    }
}



// let p = new PackageManager()
// p.removeWebsite()

// let outputFile = new JsonFile<PackageJsonType>("/Users/bigsexy/Desktop/current/ulldSandbox/ulldApp/package.json")

// let outputContent = p.applyInternalDepsToPackageJson(outputFile, [
//     "@ulld/notebook",
//     "@ulld/note-network",
//     "@ulld/eslint-config",
//     "@ulld/jest-presets",
//     "@ulld/chat",
//     "@ulld/health-tracking",
//     "@ulld/internal-dev-cli",
//     "@ulld/cookbook",
//     "@ulld/diagram",
// ])

// outputFile.writeContent(outputContent)

// console.log(outputContent)
