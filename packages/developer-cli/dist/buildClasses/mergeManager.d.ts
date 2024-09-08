import { PackageJsonType } from "../static/packageJsonType.js";
import { PathManager, PathManagerProps } from "./pathManager.js";
import { PluginManager } from "./pluginManager.js";
import type { PluginSlotData } from "@ulld/developer-schemas/types";
export declare class MergeManager extends PathManager {
    packageJson: PackageJsonType;
    pluginSlotData: PluginSlotData;
    plugins: PluginManager[];
    constructor(props: PathManagerProps);
    gather(): PluginManager[];
    getPluginStatus(pluginName: string, useExistingStatus?: boolean): {
        path: string | undefined;
        status: "installed" | "not-installed";
        packageJsonStatus: "missing" | "present";
    };
    getPluginByName(pluginName: string): PluginManager | undefined;
    validatePluginStatus(pluginName: string): boolean;
}
