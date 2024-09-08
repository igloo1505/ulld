import { PathManager } from "./pathManager.js";
import { PluginManager } from "./pluginManager.js";
import fs from 'fs';
import path from 'path';
import { pluginSlotSchema } from "@ulld/developer-schemas/slots";
export class MergeManager extends PathManager {
    packageJson;
    pluginSlotData;
    plugins = [];
    constructor(props) {
        const { targetRootPath, plugins = "self" } = props;
        super(props);
        const packageJsonContent = fs.readFileSync(path.join(targetRootPath, "package.json"), "utf-8");
        if (!packageJsonContent) {
            throw new Error(`No package.json file was found in the target directory, ${targetRootPath}`);
        }
        this.packageJson = JSON.parse(packageJsonContent);
        this.pluginSlotData = pluginSlotSchema.parse(this.packageJson?.ulld || {});
        this.plugins = this.gather();
    }
    gather() {
        let data = [];
        const pluginGroup = this.pluginSlotData;
        for (const x in pluginGroup) {
            let k = pluginGroup[x];
            if (typeof k === "object") {
                for (const l in k) {
                    const pd = this.getPluginStatus(k[l]);
                    data.push(new PluginManager({
                        targetRootPath: this.targetRootPath,
                        name: l,
                        targetVersion: k[l],
                        path: pd.path,
                        status: pd.status,
                        packageJsonStatus: pd.packageJsonStatus,
                        slot: x,
                    }));
                }
            }
            else {
                const pd = this.getPluginStatus(k);
                data.push(new PluginManager({
                    targetRootPath: this.targetRootPath,
                    name: k,
                    targetVersion: k,
                    path: pd.path,
                    status: pd.status,
                    packageJsonStatus: pd.packageJsonStatus,
                    slot: x,
                }));
            }
        }
        return data;
    }
    getPluginStatus(pluginName, useExistingStatus = false) {
        const pluginPath = path.join(this.targetRootPath, `node_modules/${pluginName}`);
        const pluginExists = this.pathExists(pluginPath);
        const packageJsonStatus = pluginExists ? "present" : "missing";
        let _status = {
            path: pluginExists ? pluginPath : undefined,
            status: pluginExists ? "installed" : "not-installed",
            packageJsonStatus
        };
        return _status;
    }
    getPluginByName(pluginName) {
        return this.plugins.find((f) => f.name === pluginName);
    }
    validatePluginStatus(pluginName) {
        const plugin = this.getPluginByName(pluginName);
        if (!plugin) {
            throw new Error("Plugin was not provided to the PathManager class");
        }
        if (plugin.packageJsonStatus !== "present") {
            console.log(`This package was not found in your package.json. Run "cd ${this.targetRootPath} && yarn <or npm> install ${pluginName} to install it.`);
            return false;
        }
        if (plugin.status !== "installed") {
            console.log(`This package is not installed but it was found in your package.json file. Run "cd ${this.targetRootPath} && yarn <or npm> install" to install all packages in your application.`);
            return false;
        }
        return true;
    }
}
