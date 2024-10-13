import {
  DJTCreateInputSchema
} from "./chunk-WDG5AMDS.js";
import {
  DJTUncheckedCreateInputSchema
} from "./chunk-JKCNDK7M.js";
import {
  DJTUncheckedUpdateInputSchema
} from "./chunk-P2SRW3O6.js";
import {
  DJTUpdateInputSchema
} from "./chunk-SWSJEC7X.js";
import {
  DJTWhereUniqueInputSchema
} from "./chunk-WS6ARYBB.js";

// src/database/outputTypeSchemas/DJTUpsertArgsSchema.ts
import { z } from "zod";
var DJTSelectSchema = z.object({
  id: z.boolean().optional(),
  type: z.boolean().optional(),
  data: z.boolean().optional()
}).strict();
var DJTUpsertArgsSchema = z.object({
  select: DJTSelectSchema.optional(),
  where: DJTWhereUniqueInputSchema,
  create: z.union([DJTCreateInputSchema, DJTUncheckedCreateInputSchema]),
  update: z.union([DJTUpdateInputSchema, DJTUncheckedUpdateInputSchema])
}).strict();
var DJTUpsertArgsSchema_default = DJTUpsertArgsSchema;

export {
  DJTSelectSchema,
  DJTUpsertArgsSchema,
  DJTUpsertArgsSchema_default
};
//# sourceMappingURL=chunk-HCEDERQI.js.map