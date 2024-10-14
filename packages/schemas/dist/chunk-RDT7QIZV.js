import {
  RandomImageWhereUniqueInputSchema
} from "./chunk-7CX6JICO.js";

// src/database/outputTypeSchemas/RandomImageFindUniqueArgsSchema.ts
import { z } from "zod";
var RandomImageSelectSchema = z.object({
  path: z.boolean().optional(),
  createdAt: z.boolean().optional()
}).strict();
var RandomImageFindUniqueArgsSchema = z.object({
  select: RandomImageSelectSchema.optional(),
  where: RandomImageWhereUniqueInputSchema
}).strict();
var RandomImageFindUniqueArgsSchema_default = RandomImageFindUniqueArgsSchema;

export {
  RandomImageSelectSchema,
  RandomImageFindUniqueArgsSchema,
  RandomImageFindUniqueArgsSchema_default
};
//# sourceMappingURL=chunk-RDT7QIZV.js.map