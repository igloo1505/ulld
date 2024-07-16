import { DeveloperConfigOutput } from "@ulld/configschema/developer";
import { SubSlot } from "./subslot";
import {
    AnySubSlotKey,
    PluginSlotKey,
} from "@ulld/configschema/developerTypes";
import { ShellManager } from "./baseClasses/shell";

interface PluginComponentProps {
    pluginName: string;
    parentSlot?: PluginSlotKey;
}

export class PluginComponent extends ShellManager {
    subSlot?: SubSlot;
    subSlotKey?: AnySubSlotKey;
    slotKey?: PluginSlotKey;
    pluginName: string;
    formattedExport: string
    formattedComponentImport: string
    haveModifiedImportName: boolean = false
    constructor(
        public data: DeveloperConfigOutput["components"][number],
        props: PluginComponentProps,
    ) {
        super();
        if (props.parentSlot) {
            this.slotKey = props.parentSlot;
        }
        if (data.slot && props.parentSlot) {
            this.subSlot = new SubSlot(
                props.pluginName,
                props.parentSlot,
                data.slot as AnySubSlotKey,
            );
            this.subSlotKey = data.slot as AnySubSlotKey;
        }
        this.pluginName = props.pluginName;
        this.formattedExport = `${this.pluginName}/${this.data.export}`
        this.formattedComponentImport = `${this.data.componentName}`
    }
    logWriteToFile() {
        if (this.slotKey && this.subSlotKey) {
            this.logVerbose(`Writing ${this.slotKey} -> ${this.subSlotKey} to file.`);
        } else {
            this.logVerbose(
                `Writing component from ${this.formattedExport} to file.`,
            );
        }
    }
    writeToFile() {
        if (this.subSlot) {
            this.logWriteToFile()
            this.subSlot.writeToFile(this.formattedExport, this.formattedComponentImport);
        }
    }
}
