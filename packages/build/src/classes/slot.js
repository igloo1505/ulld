import slotMap from "@ulld/utilities/slotMap.json" with { type: "json" };
export class PluginSlot {
    constructor(pluginName, slot, components, paths) {
        this.pluginName = pluginName;
        this.slot = slot;
        this.paths = paths;
        this.subSlotComponents = components.filter((f) => f.subSlot);
        let tempSlots = {};
        for (const k of this.subSlotComponents) {
            if (k.subSlotKey) {
                tempSlots[k.subSlotKey] = k;
            }
        }
        this.slots = tempSlots;
    }
    occupiesAllSlots() {
        return Object.keys(slotMap[this.slot]).every((x) => x in this.slots);
    }
}
