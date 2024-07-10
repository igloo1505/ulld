import { globSync } from "glob";
import fs from "fs";
import path from "path";
import rl from "readline";
import npmFetch from "npm-registry-fetch";
import { PackageJsonType } from "@ulld/utilities/packageJsonType";

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

interface PackageSource {
    name: string;
    content: PackageJsonType;
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

const readLine = rl.createInterface({
    input: process.stdin,
    output: process.stdout,
});

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
    setNewClonedAppInternalPackages(items: ClonedBaseAppInternalDep[]) {
        for (const item of items) {
            this.testRootPackageJson[item.type][item.name] = item.version;
        }
        this.writeClonedAppPackageJson();
    }
    writeClonedAppPackageJson() {
        let p = this.getClonedAppPackageJsonPath();
        fs.writeFileSync(p, JSON.stringify(this.testRootPackageJson, null, 4), {
            encoding: "utf-8",
        });
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
    getDependencies(content: string) {
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
    writeUpdateReactScript() {
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
pnpm add next@latest react@latest react-dom@latest ${filter}
`;
        }
        if (peerFilter.length) {
            s += `
pnpm add --save-peer next@latest react@latest react-dom@latest ${peerFilter}

pnpm add -D next@latest react@latest react-dom@latest ${peerFilter}
`;
        }
        if (packages.length) {
            s += `
pnpm add @types/react@latest @types/react-dom@latest ${packages.map((f) => `--filter=${f.name}`).join(" ")}`;
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
        let p = all ? this.packages : this.packages.filter((a) => a.modified);
        p.forEach((item) => {
            let data = { ...item };
            for (const k of dependencyTypes) {
                let f = {};
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
    replaceContentByName(name: string, content: object) {
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
                content[u.type][name] = version;
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
                    console.log(
                        `${k} not found in npm repository. Removing from all internal packages.`,
                    );
                    this.packagePublishedMap[k] = false;
                    removeDepNames.push(k);
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
                    `${k.name} went from ${initialDepLength} to ${newDepsLength}.`,
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
    findByDependency(name: string) {
        return this.packages.filter((a) => a.deps.find((b) => b.name === name));
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
    applyPluginConfigToFiles() {
        console.log(`Applying plugin config files to package.json files property.`);
        for (const k of this.packages) {
            let packageConfigPath = path.join(
                path.dirname(k.path),
                "./pluginConfig.ulld.json",
            );
            let existingFiles = k.content.files || [];
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
        this.writeModified(true);
    }
    processArgs(args: string[]) {
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
            process.exit()
        }
        if (args[0] === "applyPluginConfigToPackageJsonFiles") {
            this.applyPluginConfigToFiles();
            process.exit()
        }
    }
}
