import {
  DJTCreateInputSchema
} from "./chunk-WDG5AMDS.js";
import {
  DJTUncheckedCreateInputSchema
} from "./chunk-JKCNDK7M.js";

// src/database/outputTypeSchemas/DJTCreateArgsSchema.ts
import { z } from "zod";
var DJTSelectSchema = z.object({
  id: z.boolean().optional(),
  type: z.boolean().optional(),
  data: z.boolean().optional()
}).strict();
var DJTCreateArgsSchema = z.object({
  select: DJTSelectSchema.optional(),
  data: z.union([DJTCreateInputSchema, DJTUncheckedCreateInputSchema])
}).strict();
var DJTCreateArgsSchema_default = DJTCreateArgsSchema;

export {
  DJTSelectSchema,
  DJTCreateArgsSchema,
  DJTCreateArgsSchema_default
};
//# sourceMappingURL=chunk-7BD2HCAR.js.map