import { PackageJsonType } from "@ulld/developer-schemas/fullPackageJson";
import { DeveloperConfigOutput } from "@ulld/configschema/developer";
import path from "path";
import fs from "fs";
import { getSubslotsBySlot } from "@ulld/configschema/developer/getSubSlots";
import { SubSlot } from "./subslot";
import { PluginSlotKey } from "@ulld/configschema/developerTypes";
import { PluginSlot } from "./slot";
import { PluginComponent } from "./component";
import { PluginPage } from "./page";
import { PluginParser } from "./parser";
import { PluginEvents } from "./pluginEvents";

export class UlldPlugin {
    pluginConfig?: DeveloperConfigOutput;
    packageRoot: string;
    hasConfig: boolean = false;
    slot?: PluginSlot;
    components: PluginComponent[] = [];
    parsers: PluginParser[] = [];
    pages: PluginPage[] = [];
    events: PluginEvents = new PluginEvents({})
    constructor(
        public targetDir: string,
        public name: string,
        public version?: string,
    ) {
        this.packageRoot = path.join(this.targetDir, "node_modules", this.name);
        let configPath = path.join(this.packageRoot, "pluginConfig.ulld.json");
        if (fs.existsSync(configPath)) {
            this.hasConfig = true;
            this.pluginConfig = JSON.parse(
                fs.readFileSync(configPath, { encoding: "utf-8" }),
            ) as DeveloperConfigOutput
            this.events = new PluginEvents(this.pluginConfig?.events || {})
            if(!this.pluginConfig) return
            if (this.pluginConfig?.slot) {
                this.slot = new PluginSlot(
                    this.name,
                    this.pluginConfig.slot as PluginSlotKey,
                );
            }
            this.components = this.pluginConfig.components.map(
                (f) => new PluginComponent(f),
            );
            this.parsers = this.pluginConfig.parsers.map((f) => new PluginParser(f));
            this.pages = this.pluginConfig.pages.map((p) => new PluginPage(p));
        }
    }
    isValid() {
        return this.hasConfig;
    }
    applyDependency(pkg: PackageJsonType): {
        pkg: PackageJsonType;
        isNew: boolean;
    } {
        let isNew = this.name! in pkg.dependencies;
        pkg.dependencies = {
            ...pkg.dependencies,
            [this.name]: this.version || "latest",
        };
        return { pkg: pkg, isNew };
    }
}
