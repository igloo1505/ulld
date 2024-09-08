import {
  init_esm_shims
} from "./chunk-ZRREZ4KQ.js";

// src/classes/slot.ts
init_esm_shims();
import slotMap from "@ulld/utilities/slotMap.json";
var PluginSlot = class {
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
  subSlotComponents;
  slots;
  occupiesAllSlots() {
    return Object.keys(slotMap[this.slot]).every((x) => x in this.slots);
  }
};

export {
  PluginSlot
};
//# sourceMappingURL=chunk-ZP3X4LXS.js.map