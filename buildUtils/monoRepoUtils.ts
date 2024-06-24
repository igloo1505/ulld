// NOTE: This must be run from the monorepo root. Consider adding a variable in here to allow it to run from anywhere later.
import { globSync } from "glob";
import fs from "fs";
import path from "path";

interface Dependency {
    name: string;
    version: string;
    type: (typeof dependencyTypes)[number];
}

interface PackageSource {
    name: string;
    content: object;
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

const glob = () =>
    globSync(`**/package.json`, {
        ignore: "**/node_modules/**",
    });

class PackageManager {
    packages: PackageSource[] = [];
    constructor(public root: string = "/Users/bigsexy/Desktop/current/ulld") {
        this.packages = this.collectPackages();
    }
    getRootRelativePath(p: string) {
        return `${this.root}/${p.startsWith("/") ? p.slice(1, p.length) : p}`;
    }
    loadJson(p: string) {
        return JSON.parse(fs.readFileSync(p, { encoding: "utf-8" }));
    }
    getType(targetPath: string): PackageSource["type"] {
        return targetPath.includes("ulld/apps")
            ? ("app" as "app")
            : targetPath.includes("ulld/packages")
                ? ("package" as "package")
                : ("unknown" as "unknown");
    }
    collectPackages() {
        let packages: PackageSource[] = [];
        let _p = glob();
        _p.forEach((a) => {
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
    clearNodeModules(dry: boolean = false) {
        let paths = this.packages.map((a) => a.node_modules);
        paths.push(`${this.root}/node_modules`);
        paths.push(path.join(__dirname, "../pnpm-lock.yaml"))
        if (dry) {
            console.log("paths to be removed: ", paths);
        } else {
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
                console.log("item.path: ", item.path);
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
}

const p = new PackageManager();


// p.packages = p.packages.map((u) => {
//     u.content.version = "0.0.0"
//     return {
//         ...u,
//         content: u.content,
//     };
// });

// p.writeModified(true);

// p.clearNodeModules()

// let found = p.filterStringByDependency("@prisma/client")

// console.log(found)

// p.clearNodeModules();

// p.removePackageFromAll("mermaid");
// p.removePackageFromAll("rehype-mermaid");
// p.removePackageFromAll("mdx-mermaid");
