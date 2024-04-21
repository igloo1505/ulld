import { z } from "zod";
import { pluginSlotSchema } from "@ulld/developer-schemas/slots";
import type { PluginSlotKey } from "@ulld/developer-schemas/types";
import { pluginStatusTypeSchema } from "../types";
import path from 'path'
import fs from 'fs'
import { PluginConfig, pluginConfigSchema } from "@ulld/developer-schemas/pluginConfig";
import { PackageJsonType } from "@ulld/developer-schemas/fullPackageJson";
import deepmerge from "deepmerge";
import { ULLDPluginConfig } from "@ulld/developer/pluginConfig"



const pluginProps = z.object({
    targetRootPath: z.string(),
    name: z.string(),
    targetVersion: z.string().default("latest"),
    path: z.string().optional(),
    status: pluginStatusTypeSchema,
    packageJsonStatus: z.union([
        z.literal("missing"),
        z.literal("present")
    ]),
    slot: pluginSlotSchema.keyof(),
});

type T = z.output<typeof pluginProps>


export class PluginManager implements T {
    targetRootPath: T["targetRootPath"];
    name: T["name"];
    targetVersion: T["targetVersion"];
    path?: T["path"];
    status: T["status"];
    packageJsonStatus: T["packageJsonStatus"];
    slot: PluginSlotKey;
    exists: boolean;
    packageJsonPath?: string;
    packageConfig?: PluginConfig;
    packageJsonContent?: PackageJsonType;
    manager?: ULLDPluginConfig;
    constructor(props: z.input<typeof pluginProps>) {
        const p = pluginProps.parse(props);
        this.name = p.name
        this.path = p.path
        this.targetRootPath = p.targetRootPath
        this.slot = p.slot
        this.targetVersion = p.targetVersion
        this.status = p.status
        this.packageJsonStatus = p.packageJsonStatus
        this.exists = Boolean(p.status === "installed" && p.path && p.packageJsonStatus === "present")
        if(p.path){
            this.packageJsonPath = path.join(p.path, "package.json")
            this.packageJsonContent = JSON.parse(fs.readFileSync(this.packageJsonPath, "utf-8"))
            this.packageConfig = this.getPluginConfig()
        }
    }
    // RESUME: Come back here and gather each plugins plugin config. This should be able to be exported either from the package.json directly under a ulld-plugin key, or in a separate pluginConfig.ulld.json file at the root of the plugins directory. Don't worry about typescript and functions and what not since it will point to a typescript file.
    getPluginConfig(): PluginConfig | undefined {
        if(!this.path) return
        const packageJsonConfig = this.packageJsonContent ? this.packageJsonContent["ulld-plugin"] : undefined
        const rootFile = path.join(this.path, "pluginConfig.ulld.json")
        let d: PluginConfig = {} as PluginConfig
        if(packageJsonConfig){
             d = pluginConfigSchema.parse(packageJsonConfig)
        }
        if(fs.existsSync(rootFile)){
            const rootFileContent = fs.readFileSync(rootFile, "utf-8")
             d = deepmerge(d, JSON.parse(rootFileContent))
        }
        return d
    }

    // RESUME: Come back here in the morning and load plugin manager class from the plugins ULLDPlugin class derivative.
    async getPluginManager(): Promise<ULLDPluginConfig | undefined> {
        const p = this.packageConfig?.paths?.pluginManager
        if(!p) return
        const ulldPluginConfig = await import(p)
        console.log("ulldPluginConfig: ", ulldPluginConfig)
        return ulldPluginConfig
    }
}
