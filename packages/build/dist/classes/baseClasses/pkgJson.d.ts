import { PackageJsonType } from "@ulld/developer-schemas/fullPackageJson";
import { DeveloperConfigOutput } from "@ulld/configschema/developer";
import { PackageManagers } from "../../types.js";
import { Prompter } from "../prompter.js";
interface ExportItem {
    export: string;
    /** Made more consistent using the same function applied to export fileds in the developer config schema. */
    transformedExport: string;
    subPath: string;
}
export declare class PackageJson extends Prompter {
    applicationDir: string;
    data?: PackageJsonType;
    path: string;
    constructor(applicationDir: string, targetDir: string | undefined, gitBranch: string);
    applyScript(newScript: Record<string, string>): void;
    private getPackageManagerScripts;
    setPackageManagerScripts(m: PackageManagers): void;
    gather(): void;
    exists(): boolean;
    getData(): {
        name: string;
        dependencies: Record<string, string>;
        main?: string | undefined;
        cpu?: string[] | undefined;
        files?: string[] | undefined;
        type?: string | undefined;
        version?: string | undefined;
        exports?: Record<string, string> | undefined;
        packageManager?: string | undefined;
        devDependencies?: Record<string, string> | undefined;
        peerDependencies?: Record<string, string> | undefined;
        peerDependenciesMeta?: any;
        optionalDependencies?: Record<string, string> | undefined;
        bundleDependencies?: Record<string, string> | undefined;
        scripts?: Record<string, string> | undefined;
        private?: boolean | undefined;
        os?: string[] | undefined;
        workspaces?: string[] | undefined;
        funding?: {
            type: "patreon" | "individual";
            url: string;
        } | undefined;
        bin?: string | undefined;
        man?: string | string[] | undefined;
        keywords?: string[] | undefined;
        homepage?: string | undefined;
        license?: string | undefined;
        people?: {
            name: string;
            url?: string | undefined;
            email?: string | undefined;
        } | {
            author: string;
        } | undefined;
        description?: string | undefined;
        "ulld-pluginConfig"?: any;
    } | undefined;
    consistentlyFormatExport(exportString: string): string;
    write(p: PackageManagers): void;
    getExports(): ExportItem[];
    getPluginConfig(): DeveloperConfigOutput | undefined;
    getSubPathByExport(exportKey: string): string | undefined;
}
export {};
