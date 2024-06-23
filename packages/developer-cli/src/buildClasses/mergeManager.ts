import { PathManager, PathManagerProps } from "./pathManager";
import { PluginManager } from "./pluginManager";
import fs from 'fs'
import path from 'path'
import { pluginSlotSchema } from "@ulld/configschema/slotsSchema";
import type { PluginSlotData, PluginSlotKey } from "@ulld/developer-schemas/types";
import {PackageJsonType} from "@ulld/developer-schemas/fullPackageJson"

export class MergeManager extends PathManager {
    packageJson: PackageJsonType
    pluginSlotData: PluginSlotData
    plugins: PluginManager[] = []
    constructor(props: PathManagerProps) {
        const {targetRootPath, plugins = "self"} = props
        super(props)
        const packageJsonContent = fs.readFileSync(
            path.join(targetRootPath, "package.json"),
            "utf-8"
        );
        if (!packageJsonContent) {
            throw new Error(`No package.json file was found in the target directory, ${targetRootPath}`)
        }
        this.packageJson = JSON.parse(packageJsonContent) as PackageJsonType
        this.pluginSlotData = pluginSlotSchema.parse(this.packageJson?.ulld || {})
        this.plugins = this.gather()
    }
    gather(): PluginManager[] {
        let data: PluginManager[]  = []
        const pluginGroup = this.pluginSlotData
        for (const x in pluginGroup){
            let k = pluginGroup[x as keyof typeof this.pluginSlotData]
            if(typeof k === "object"){
                for (const l in k){
                    const pd = this.getPluginStatus(k[l])
                    data.push(new PluginManager({
                        targetRootPath: this.targetRootPath,
                        name: l,
                        targetVersion: k[l],
                        path: pd.path,
                        status: pd.status,
                        packageJsonStatus: pd.packageJsonStatus,
                        slot: x as PluginSlotKey,
                    })) 
                }
            } else {
            const pd = this.getPluginStatus(k)
                    data.push(new PluginManager({
                        targetRootPath: this.targetRootPath,
                        name: k,
                        targetVersion: k,
                        path: pd.path,
                        status: pd.status,
                        packageJsonStatus: pd.packageJsonStatus,
                        slot: x as PluginSlotKey,
                    })) 
            }
        }
        return data 
    }
    getPluginStatus(pluginName: string, useExistingStatus: boolean = false) {
        const pluginPath = path.join(
            this.targetRootPath,
            `node_modules/${pluginName}`,
        );
        const pluginExists = this.pathExists(pluginPath)
        const packageJsonStatus = pluginExists ? "present" as "present" : "missing" as "missing"
        let _status = {
            path: pluginExists ? pluginPath : undefined,
            status: pluginExists ? "installed" as "installed" : "not-installed" as "not-installed",
            packageJsonStatus
        };
        return _status

    }
    getPluginByName(pluginName: string) {
        return this.plugins.find((f) => f.name === pluginName)
    }
    validatePluginStatus(pluginName: string): boolean {
        const plugin = this.getPluginByName(pluginName)
        if (!plugin) {
            throw new Error("Plugin was not provided to the PathManager class")
        }
        if (plugin.packageJsonStatus !== "present") {
            console.log(`This package was not found in your package.json. Run "cd ${this.targetRootPath} && yarn <or npm> install ${pluginName} to install it.`)
            return false
        }
        if (plugin.status !== "installed") {
            console.log(`This package is not installed but it was found in your package.json file. Run "cd ${this.targetRootPath} && yarn <or npm> install" to install all packages in your application.`)
            return false
        }
        return true
    }
}
