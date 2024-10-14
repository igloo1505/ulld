import {
  DJTWhereUniqueInputSchema
} from "./chunk-ZKHP557W.js";

// src/database/outputTypeSchemas/DJTFindUniqueArgsSchema.ts
import { z } from "zod";
var DJTSelectSchema = z.object({
  id: z.boolean().optional(),
  type: z.boolean().optional(),
  data: z.boolean().optional()
}).strict();
var DJTFindUniqueArgsSchema = z.object({
  select: DJTSelectSchema.optional(),
  where: DJTWhereUniqueInputSchema
}).strict();
var DJTFindUniqueArgsSchema_default = DJTFindUniqueArgsSchema;

export {
  DJTSelectSchema,
  DJTFindUniqueArgsSchema,
  DJTFindUniqueArgsSchema_default
};
//# sourceMappingURL=chunk-RJIC7K73.js.map