import {
  RandomImageWhereUniqueInputSchema
} from "./chunk-7CX6JICO.js";

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
//# sourceMappingURL=chunk-7JMCEL7Y.js.map