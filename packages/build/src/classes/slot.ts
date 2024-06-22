import { getSubslotsBySlot } from "@ulld/configschema/developer/getSubSlots";
import { PluginSlotKey } from "@ulld/configschema/developerTypes";
import { SubSlot } from "./subslot";

export class PluginSlot {
    subslots: SubSlot[] = [];
    constructor(
        public pluginName: string,
        public slot: PluginSlotKey,
    ) {
        this.subslots = getSubslotsBySlot(slot).map(
            (s) => new SubSlot(this.pluginName, slot as PluginSlotKey, s),
        );
    }
}
