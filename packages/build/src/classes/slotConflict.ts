import { SubSlot } from "./subslot.js";
import { ConflictBaseClass } from "./baseClasses/conflict.js";
import type { PluginSlotKey } from "@ulld/configschema/slotMapType";


export class SlotConflict extends ConflictBaseClass {
    constructor(
        public slot: PluginSlotKey,
        public subslot: string,
        public slots: SubSlot[],
    ) {
        super()
    }

    getName() {
        return `${this.slot} -> ${this.subslot}`;
    }

    getSurveyPromptData() {
        return {
            type: "select" as "select",
            name: this.surveyKey,
            message: `${this.slot} > ${this.subslot}`,
            choices: this.slots.map((s) => s.pluginName),
        }
    }

    resolveSlotConflict(acceptedSlot: string) {
        for (const k of this.slots) {
            if (acceptedSlot !== k.pluginName) {
                k.cancel();
            }
        }
    }

}
