import { DeveloperConfigOutput } from "@ulld/configschema/developer";
import { TargetPaths } from "./paths";
import { DeveloperConfigInput } from "@ulld/types";
import { EventMethodKey } from "../types";
import { ShellManager } from "./baseClasses/shell";

export class PluginEvents extends ShellManager {
    hasEvents: boolean = false
    importNames: NonNullable<DeveloperConfigInput["events"]> = {
        onSync: "onSyncMethod_",
        onBuild: "onBuildMethod_",
        onBackup: "onBackupMethod_",
        onRestore: "onRestoreMethod_",
    }
    constructor(public data: DeveloperConfigOutput["events"], public paths: TargetPaths, public pluginName: string){
        super()
        this.hasEvents = Object.keys(data).length > 0
    }
    applyIndex(index: number){
        this.logDebug(`Applying index ${index} to ${this.pluginName} events`)
        for (const k in this.importNames) {
            this.importNames[k as EventMethodKey] = `${this.importNames[k as EventMethodKey]}${index}`
        }
    }
    hasEventType(k: EventMethodKey){
        return Boolean(this.data[k])
    }
    getEventImport(k: EventMethodKey){
        return `import ${this.importNames[k]} from "${this.pluginName}/${this.data[k]}";`
    }
    getMethodAsString(k: EventMethodKey){
        return `${this.importNames[k]}`
    }
    getOutputMethod(k: EventMethodKey){
        return `{
    func: ${this.importNames[k]},
    pluginId: "${this.pluginName}"
}`
    }
}
