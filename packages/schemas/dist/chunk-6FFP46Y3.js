import {
  RandomImageWhereUniqueInputSchema
} from "./chunk-ZEPTB4HC.js";

// src/database/outputTypeSchemas/RandomImageFindUniqueOrThrowArgsSchema.ts
import { z } from "zod";
var RandomImageSelectSchema = z.object({
  path: z.boolean().optional(),
  createdAt: z.boolean().optional()
}).strict();
var RandomImageFindUniqueOrThrowArgsSchema = z.object({
  select: RandomImageSelectSchema.optional(),
  where: RandomImageWhereUniqueInputSchema
}).strict();
var RandomImageFindUniqueOrThrowArgsSchema_default = RandomImageFindUniqueOrThrowArgsSchema;

export {
  RandomImageSelectSchema,
  RandomImageFindUniqueOrThrowArgsSchema,
  RandomImageFindUniqueOrThrowArgsSchema_default
};
//# sourceMappingURL=chunk-6FFP46Y3.js.map