import { AnySubSlotKey, PluginSlotKey } from "@ulld/configschema/developerTypes";
import slotMap from "@ulld/utilities/slotMap.json" with { type: 'json' };
import { PluginComponent } from "./component.js";
import { TargetPaths } from "./paths.js";

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
