import {
  DJTCreateInputSchema
} from "./chunk-PZVG43IM.js";
import {
  DJTUncheckedCreateInputSchema
} from "./chunk-W2V3G4OT.js";
import {
  DJTUncheckedUpdateInputSchema
} from "./chunk-MVAB2B4E.js";
import {
  DJTUpdateInputSchema
} from "./chunk-E2SWQ56E.js";
import {
  DJTWhereUniqueInputSchema
} from "./chunk-ZKHP557W.js";

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
//# sourceMappingURL=chunk-7KW2V4B6.js.map