import { PluginSlotKey } from "@ulld/configschema/developerTypes";
import { PluginSlot } from "./slot";
import { SubSlot } from "./subslot";

export class SlotConflict {
    constructor(public slot: PluginSlotKey, public subslot: string, public slots: SubSlot[]){

    }
}
