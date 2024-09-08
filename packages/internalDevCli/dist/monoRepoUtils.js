// NOTE: This must be run from the monorepo root. Consider adding a variable in here to allow it to run from anywhere later.
import { globSync } from "glob";
import fs from "fs";
import path from "path";
const dependencyTypes = [
    "peerDependencies",
    "devDependencies",
    "dependencies",
];
export class MonoRepoManager {
    root;
    packages = [];
    rootPackageJson;
    constructor(root = "/Users/bigsexy/Desktop/current/ulld") {
        this.root = root;
        this.packages = this.collectPackages();
        let path = this.getRootRelativePath("package.json");
        this.rootPackageJson = {
            path,
            content: this.loadJson(path),
        };
    }
    getRootRelativePath(p) {
        return `${this.root}/${p.startsWith("/") ? p.slice(1, p.length) : p}`;
    }
    loadJson(p) {
        return JSON.parse(fs.readFileSync(p, { encoding: "utf-8" }));
    }
    getType(targetPath) {
        return targetPath.includes("ulld/apps")
            ? "app"
            : targetPath.includes("ulld/packages")
                ? "package"
                : "unknown";
    }
    collectPackages() {
        let found = globSync(`**/package.json`, {
            ignore: "**/node_modules/**",
        });
        let packages = [];
        found.forEach((a) => {
            const targetPath = path.join(process.cwd(), a);
            let content = this.loadJson(targetPath);
            let name = content?.name;
            if (name && name.startsWith("@ulld")) {
                packages.push({
                    name,
                    type: this.getType(targetPath),
                    content: content,
                    path: targetPath,
                    deps: this.getDependencies(content),
                    node_modules: targetPath.replace("package.json", "node_modules"),
                });
            }
        });
        return packages;
    }
    getDependencies(content) {
        let deps = [];
        for (const k of dependencyTypes) {
            let o = content[k];
            if (o) {
                Object.keys(o).map((name) => {
                    deps.push({
                        name,
                        version: o[name],
                        type: k,
                    });
                });
            }
        }
        return deps;
    }
    rmDir(p) {
        if (fs.existsSync(p)) {
            fs.rmSync(p, { recursive: true });
        }
    }
    rm(p) {
        if (fs.existsSync(p)) {
            fs.rmSync(p);
        }
    }
    clearNodeModules(dry = false, withRoot = false) {
        let paths = this.packages.map((a) => a.node_modules);
        if (withRoot) {
            paths.push(`${this.root}/node_modules`);
        }
        if (dry) {
            console.log("paths to be removed: ", paths);
        }
        else {
            for (const p of paths) {
                if (fs.existsSync(p)) {
                    fs.rmSync(p, { recursive: true });
                }
            }
        }
    }
    removePackageLock() {
        this.rm(this.getRootRelativePath("pnpm-lock.yaml"));
    }
    writeModified(all = false, dry = false) {
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
            }
            else {
                console.log(JSON.stringify(data.content, null, 4));
            }
        });
        if (all || this.rootPackageJson.modified) {
            fs.writeFileSync(this.rootPackageJson.path, JSON.stringify(this.rootPackageJson.content, null, 4));
        }
    }
    replaceContentByName(name, content) {
        this.packages = this.packages.map((a) => a.name === name ? { ...a, content: content, modified: true } : a);
    }
    replacePackage(name, version) {
        this.findByDependency(name).forEach((a) => {
            if (!a.content)
                return;
            const match = a.deps.filter((b) => b.name === name);
            let content = a.content;
            match.forEach((u) => {
                if (!content[u.type]) {
                    content[u.type] = {};
                }
                /* @ts-ignore */
                content[u.type][name] = version;
            });
            this.replaceContentByName(a.name, content);
        });
    }
    getProperty(k) {
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
    depsByName(monoRepoPackageName) {
        return this.packages.find((a) => a.name === monoRepoPackageName)?.deps;
    }
    findByDependency(name) {
        return this.packages.filter((a) => a.deps.find((b) => b.name === name));
    }
    filterStringByDependency(name) {
        let items = name === "all" ? this.packages : this.findByDependency(name);
        let s = items.map((a) => `--filter=${a.name}`).join(" ");
        console.log(s);
        return s;
    }
    removePackageFromAll(name) {
        this.packages = this.packages.map((a) => {
            return {
                ...a,
                deps: a.deps.filter((a) => a.name !== name),
            };
        });
    }
    setPackageManager(pm) {
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
        this.rootPackageJson = {
            ...this.rootPackageJson,
            modified: true,
            content: {
                ...this.rootPackageJson.content,
                packageManager: pm,
            },
        };
    }
    getPackagesByRegex(re) {
        if (typeof re === "string") {
            re = [re];
        }
        let packages = [];
        re.forEach((reg) => {
            this.packages.forEach((a) => {
                let packageMatches = [];
                a.deps.forEach((b) => {
                    if (new RegExp(reg, "gi").test(b.name)) {
                        packageMatches.push(b);
                    }
                });
                if (packageMatches.length > 0) {
                    packages.push({
                        ...a,
                        matches: packageMatches,
                    });
                }
            });
        });
        return packages;
    }
}
