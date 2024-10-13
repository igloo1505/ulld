import {
  DJTUncheckedUpdateInputSchema
} from "./chunk-P2SRW3O6.js";
import {
  DJTUpdateInputSchema
} from "./chunk-SWSJEC7X.js";
import {
  DJTWhereUniqueInputSchema
} from "./chunk-WS6ARYBB.js";

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
//# sourceMappingURL=chunk-TQZAC3LA.js.map