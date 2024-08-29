import { ShellManager } from "./baseClasses/shell.js";
export class PluginAdditionalPage extends ShellManager {
    constructor(pluginName, parentSlot, subSlot, paths) {
        super();
        this.pluginName = pluginName;
        this.parentSlot = parentSlot;
        this.subSlot = subSlot;
        this.paths = paths;
    }
    writeToFile(formattedExport, formattedComponentImport) {
        this.logFixme("Write to file for PluginAdditionalPage class.");
    }
}
