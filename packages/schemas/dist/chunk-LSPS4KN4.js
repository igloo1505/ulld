import {
  DJTWhereUniqueInputSchema
} from "./chunk-ZKHP557W.js";

// src/database/outputTypeSchemas/DJTFindUniqueOrThrowArgsSchema.ts
import { z } from "zod";
var DJTSelectSchema = z.object({
  id: z.boolean().optional(),
  type: z.boolean().optional(),
  data: z.boolean().optional()
}).strict();
var DJTFindUniqueOrThrowArgsSchema = z.object({
  select: DJTSelectSchema.optional(),
  where: DJTWhereUniqueInputSchema
}).strict();
var DJTFindUniqueOrThrowArgsSchema_default = DJTFindUniqueOrThrowArgsSchema;

export {
  DJTSelectSchema,
  DJTFindUniqueOrThrowArgsSchema,
  DJTFindUniqueOrThrowArgsSchema_default
};
//# sourceMappingURL=chunk-LSPS4KN4.js.map