import { AnySubSlotKey, PluginSlotKey } from "@ulld/configschema/developerTypes";
import { ShellManager } from "./baseClasses/shell.js";
import { TargetPaths } from "./paths.js";

export class PluginAdditionalPage extends ShellManager {
    constructor(
        public pluginName: string,
        public parentSlot: PluginSlotKey | undefined,
        public subSlot: AnySubSlotKey | undefined,
        public paths: TargetPaths,
    ) { 
        super()
    }

    writeToFile(formattedExport: string, formattedComponentImport: string){
        this.logFixme("Write to file for PluginAdditionalPage class.")
    }
}
