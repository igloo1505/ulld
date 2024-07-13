import { z } from "zod";
import { slotKeySchema } from "../developer/slotKeySchema";
import { embeddableConfigSchema } from "../developer/componentSchema";

export const baseAppSlot = z.object({
    parentSlot: slotKeySchema,
    subSlot: z.string(),
    path: z.string(),
    clientOnly: z.boolean().default(false),
    type: z.union([
        z.literal("page"),
        z.literal("component"),
        z.literal("embeddable"),
    ]),
    propsExtends: z.string().optional(),
    embeddables: z
        .union([embeddableConfigSchema, embeddableConfigSchema.array()])
        .transform((a) => (Array.isArray(a) ? a : [a])),
});


export type BaseAppSlotConfig = z.input<typeof baseAppSlot>
