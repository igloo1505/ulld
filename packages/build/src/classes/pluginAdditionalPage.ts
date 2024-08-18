import { AnySubSlotKey } from "@ulld/configschema/developerTypes";
import { PluginSlotKey } from "@ulld/types";
import { TargetPaths } from "./paths";
import { ShellManager } from "./baseClasses/shell";

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
