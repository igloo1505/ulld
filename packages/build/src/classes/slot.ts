import { AnySubSlotKey, PluginSlotKey } from "@ulld/configschema/developerTypes";
import { PluginComponent } from "./component";
import slotMap from "@ulld/utilities/slotMap.json"
import { TargetPaths } from "./paths";

type SlotRecord = {[K in AnySubSlotKey]?: PluginComponent}


export class PluginSlot {
    subSlotComponents: PluginComponent[]
    slots: SlotRecord
    constructor(
        public pluginName: string,
        public slot: PluginSlotKey,
        components: PluginComponent[],
        public paths: TargetPaths
    ) {
        this.subSlotComponents = components.filter((f) => f.subSlot)
        let tempSlots = {} as SlotRecord
        for (const k of this.subSlotComponents) {
            if(k.subSlotKey){
                tempSlots[k.subSlotKey as keyof typeof tempSlots] = k
            }
        }
        this.slots = tempSlots
    }
    occupiesAllSlots(){
        return Object.keys(slotMap[this.slot]).every((x) => x in this.slots)
    }
}
