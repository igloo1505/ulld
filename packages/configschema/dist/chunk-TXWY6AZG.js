import {
  embeddableConfigSchema
} from "./chunk-CFWZGS6F.js";
import {
  slotKeySchema
} from "./chunk-MGU6YS2N.js";

// src/baseApp/slot.tsx
import { z } from "zod";
var baseAppSlot = z.object({
  parentSlot: slotKeySchema,
  subSlot: z.string(),
  path: z.string(),
  clientOnly: z.boolean().default(false),
  type: z.union([
    z.literal("page"),
    z.literal("component"),
    z.literal("embeddable")
  ]),
  propsExtends: z.string().optional(),
  embeddables: z.union([embeddableConfigSchema, embeddableConfigSchema.array()]).transform((a) => Array.isArray(a) ? a : [a])
});

export {
  baseAppSlot
};
//# sourceMappingURL=chunk-TXWY6AZG.js.map