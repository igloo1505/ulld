import {
  DJTUncheckedUpdateInputSchema
} from "./chunk-MVAB2B4E.js";
import {
  DJTUpdateInputSchema
} from "./chunk-E2SWQ56E.js";
import {
  DJTWhereUniqueInputSchema
} from "./chunk-ZKHP557W.js";

// src/database/outputTypeSchemas/DJTUpdateArgsSchema.ts
import { z } from "zod";
var DJTSelectSchema = z.object({
  id: z.boolean().optional(),
  type: z.boolean().optional(),
  data: z.boolean().optional()
}).strict();
var DJTUpdateArgsSchema = z.object({
  select: DJTSelectSchema.optional(),
  data: z.union([DJTUpdateInputSchema, DJTUncheckedUpdateInputSchema]),
  where: DJTWhereUniqueInputSchema
}).strict();
var DJTUpdateArgsSchema_default = DJTUpdateArgsSchema;

export {
  DJTSelectSchema,
  DJTUpdateArgsSchema,
  DJTUpdateArgsSchema_default
};
//# sourceMappingURL=chunk-TRDFSVSR.js.map