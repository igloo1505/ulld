import {
  DJTWhereUniqueInputSchema
} from "./chunk-WS6ARYBB.js";

// src/database/outputTypeSchemas/DJTDeleteArgsSchema.ts
import { z } from "zod";
var DJTSelectSchema = z.object({
  id: z.boolean().optional(),
  type: z.boolean().optional(),
  data: z.boolean().optional()
}).strict();
var DJTDeleteArgsSchema = z.object({
  select: DJTSelectSchema.optional(),
  where: DJTWhereUniqueInputSchema
}).strict();
var DJTDeleteArgsSchema_default = DJTDeleteArgsSchema;

export {
  DJTSelectSchema,
  DJTDeleteArgsSchema,
  DJTDeleteArgsSchema_default
};
//# sourceMappingURL=chunk-AII3K4IF.js.map