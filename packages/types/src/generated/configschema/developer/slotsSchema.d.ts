import { z, ZodTypeAny } from "zod";
import { SlotMap } from "./slotMapRootType.js";
import { ZodOutputSchema } from "../types.js";
export declare const configPluginSchema: z.ZodEffects<z.ZodObject<{
    name: z.ZodString;
    version: z.ZodDefault<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    name?: string;
    version?: string;
}, {
    name?: string;
    version?: string;
}>, {
    name: string;
    version: string;
}, {
    name?: string;
    version?: string;
}>;
export declare const slotFieldsBase: Record<keyof SlotMap, ZodTypeAny>;
export declare const slotFields: Record<keyof SlotMap, ZodTypeAny>;
export declare const pluginSlotSchema: z.ZodObject<Record<keyof SlotMap, z.ZodTypeAny>, "strip", z.ZodTypeAny, {
    navigation?: any;
    bibliography?: any;
    math?: any;
    snippets?: any;
    dashboard?: any;
    taskManager?: any;
    UI?: any;
    pdf?: any;
    editor?: any;
    form?: any;
    commandPalette?: any;
}, {
    navigation?: any;
    bibliography?: any;
    math?: any;
    snippets?: any;
    dashboard?: any;
    taskManager?: any;
    UI?: any;
    pdf?: any;
    editor?: any;
    form?: any;
    commandPalette?: any;
}>;
export declare const pluginSlotSchemaOutput: ZodOutputSchema<typeof pluginSlotSchema>;
export declare const ulldSlots: string[];
