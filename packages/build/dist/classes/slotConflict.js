import { ConflictBaseClass } from "./baseClasses/conflict.js";
export class SlotConflict extends ConflictBaseClass {
    slot;
    subslot;
    slots;
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
            choices: this.slots.map((s) => s.pluginName),
        };
    }
    resolveSlotConflict(acceptedSlot) {
        for (const k of this.slots) {
            if (acceptedSlot !== k.pluginName) {
                k.cancel();
            }
        }
    }
}
