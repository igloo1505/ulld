import { SubSlot } from "./subslot.js";
import { ConflictBaseClass } from "./baseClasses/conflict.js";
import { PluginSlotKey } from "@ulld/configschema/slotMapType";
export declare class SlotConflict extends ConflictBaseClass {
    slot: PluginSlotKey;
    subslot: string;
    slots: SubSlot[];
    constructor(slot: PluginSlotKey, subslot: string, slots: SubSlot[]);
    getName(): string;
    getSurveyPromptData(): {
        type: "select";
        name: string;
        message: string;
        choices: string[];
    };
    resolveSlotConflict(acceptedSlot: string): void;
}
