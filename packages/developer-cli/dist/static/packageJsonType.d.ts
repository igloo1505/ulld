import { PluginConfig } from "../schemas/pluginConfigSchema.js";
export type PackageJsonType = {
    name?: string;
    version?: string;
    exports?: string | Record<string, string>;
    type?: string;
    files?: string[];
    scripts?: Record<string, string>;
    dependencies?: Record<string, string>;
    devDependencies?: Record<string, string>;
    peerDependencies?: Record<string, string>;
    packageManager?: string;
    ulld?: Record<string, string>;
    "ulld-plugin"?: PluginConfig;
};
