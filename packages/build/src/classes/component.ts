import { DeveloperConfigOutput } from "@ulld/configschema/developer";
import { SubSlot } from "./subslot";
import { PluginSlotKey } from "@ulld/configschema/developerTypes";

interface PluginComponentProps {
    pluginName: string;
    parentSlot?: PluginSlotKey;
}

export class PluginComponent {
    subSlot?: SubSlot;
    constructor(
        public data: DeveloperConfigOutput["components"][number],
        props: PluginComponentProps,
    ) { 
        if(data.slot && props.parentSlot){
            this.subSlot = new SubSlot(props.pluginName, props.parentSlot, data.slot)
        }
    }
}
