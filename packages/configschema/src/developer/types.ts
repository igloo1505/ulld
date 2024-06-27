import { z } from "zod";
import { pluginSlotSchema } from "./slotsSchema";
export type { SlotMap } from "./slotMapType";
export type { ComponentConfigSchema } from "./componentSchema";

export type PluginSlotData = z.output<typeof pluginSlotSchema>;

let pk = pluginSlotSchema.keyof();

export type PluginSlotKey = z.output<typeof pk>;
