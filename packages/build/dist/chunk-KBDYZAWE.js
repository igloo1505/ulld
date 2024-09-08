import {
  ConflictBaseClass
} from "./chunk-DX56BAVJ.js";
import {
  init_esm_shims
} from "./chunk-ZRREZ4KQ.js";

// src/classes/slotConflict.ts
init_esm_shims();
var SlotConflict = class extends ConflictBaseClass {
  constructor(slot, subslot, slots) {
    super();
    this.slot = slot;
    this.subslot = subslot;
    this.slots = slots;
  }
  getName() {
    return `${this.slot} -> ${this.subslot}`;
  }
  getSurveyPromptData() {
    return {
      type: "select",
      name: this.surveyKey,
      message: `${this.slot} > ${this.subslot}`,
      choices: this.slots.map((s) => s.pluginName)
    };
  }
  resolveSlotConflict(acceptedSlot) {
    for (const k of this.slots) {
      if (acceptedSlot !== k.pluginName) {
        k.cancel();
      }
    }
  }
};

export {
  SlotConflict
};
//# sourceMappingURL=chunk-KBDYZAWE.js.map