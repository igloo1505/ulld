interface PackageJson {
    name: string;
    peerDependencies?: Record<string, string>;
    devDependencies?: Record<string, string>;
    dependencies?: Record<string, string>;
    packageManager?: string;
}
interface Dependency {
    name: string;
    version: string;
    type: (typeof dependencyTypes)[number];
}
interface PackageSource {
    name: string;
    content: PackageJson;
    type: "package" | "app" | "unknown";
    path: string;
    deps: Dependency[];
    modified?: boolean;
    node_modules: string;
}
declare const dependencyTypes: readonly ["peerDependencies", "devDependencies", "dependencies"];
export declare class MonoRepoManager {
    root: string;
    packages: PackageSource[];
    rootPackageJson: {
        path: string;
        content: PackageJson;
        modified?: boolean;
    };
    constructor(root?: string);
    getRootRelativePath(p: string): string;
    loadJson(p: string): any;
    getType(targetPath: string): PackageSource["type"];
    collectPackages(): PackageSource[];
    getDependencies(content: object): Dependency[];
    rmDir(p: string): void;
    rm(p: string): void;
    clearNodeModules(dry?: boolean, withRoot?: boolean): void;
    removePackageLock(): void;
    writeModified(all?: boolean, dry?: boolean): void;
    private replaceContentByName;
    replacePackage(name: string, version: string): void;
    getProperty(k: keyof (typeof this.packages)[number]): (string | boolean | PackageJson | Dependency[] | undefined)[];
    listInvalid(): string[];
    names(): (string | boolean | PackageJson | Dependency[] | undefined)[];
    contents(): (string | boolean | PackageJson | Dependency[] | undefined)[];
    types(): (string | boolean | PackageJson | Dependency[] | undefined)[];
    depsByName(monoRepoPackageName: string): Dependency[] | undefined;
    findByDependency(name: string): PackageSource[];
    filterStringByDependency(name: string): string;
    removePackageFromAll(name: string): void;
    setPackageManager(pm: string): void;
    getPackagesByRegex(re: string | string[]): (PackageSource & {
        matches: Dependency[];
    })[];
}
export {};
