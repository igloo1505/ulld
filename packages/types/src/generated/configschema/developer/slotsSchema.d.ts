import { z, ZodTypeAny } from "zod";
import { SlotMap } from "./slotMapRootType.js";
export declare const configPluginSchema: z.ZodEffects<z.ZodObject<{
    name: z.ZodString;
    version: z.ZodDefault<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    name: string;
    version: string;
}, {
    name: string;
    version?: string | undefined;
}>, {
    name: string;
    version: string;
}, {
    name: string;
    version?: string | undefined;
}>;
export declare const slotFields: Record<keyof SlotMap, ZodTypeAny>;
export declare const pluginSlotSchema: z.ZodObject<Record<keyof SlotMap, z.ZodTypeAny>, "strip", z.ZodTypeAny, {
    bibliography?: any;
    math?: any;
    navigation?: any;
    form?: any;
    snippets?: any;
    dashboard?: any;
    taskManager?: any;
    UI?: any;
    pdf?: any;
    editor?: any;
    commandPalette?: any;
}, {
    bibliography?: any;
    math?: any;
    navigation?: any;
    form?: any;
    snippets?: any;
    dashboard?: any;
    taskManager?: any;
    UI?: any;
    pdf?: any;
    editor?: any;
    commandPalette?: any;
}>;
export declare const ulldSlots: string[];
//# sourceMappingURL=slotsSchema.d.ts.map