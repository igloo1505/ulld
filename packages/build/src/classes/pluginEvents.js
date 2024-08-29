import { ShellManager } from "./baseClasses/shell.js";
export class PluginEvents extends ShellManager {
    constructor(data, paths, pluginName) {
        super();
        this.data = data;
        this.paths = paths;
        this.pluginName = pluginName;
        this.hasEvents = false;
        this.importNames = {
            onSync: "onSyncMethod_",
            onBuild: "onBuildMethod_",
            onBackup: "onBackupMethod_",
            onRestore: "onRestoreMethod_",
        };
        this.hasEvents = Object.keys(data).length > 0;
    }
    applyIndex(index) {
        this.logDebug(`Applying index ${index} to ${this.pluginName} events`);
        for (const k in this.importNames) {
            this.importNames[k] = `${this.importNames[k]}${index}`;
        }
    }
    hasEventType(k) {
        return Boolean(this.data[k]);
    }
    getEventImport(k) {
        return `import ${this.importNames[k]} from "${this.pluginName}/${this.data[k]}";`;
    }
    getMethodAsString(k) {
        return `${this.importNames[k]}`;
    }
    getOutputMethod(k) {
        return `{
    func: ${this.importNames[k]},
    pluginId: "${this.pluginName}"
}`;
    }
}
