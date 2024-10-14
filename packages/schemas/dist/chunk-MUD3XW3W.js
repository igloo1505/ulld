import {
  RandomImageOrderByWithRelationInputSchema
} from "./chunk-5CVYGPNS.js";
import {
  RandomImageScalarFieldEnumSchema
} from "./chunk-JIHEBZY7.js";
import {
  RandomImageWhereUniqueInputSchema
} from "./chunk-7CX6JICO.js";
import {
  RandomImageWhereInputSchema
} from "./chunk-XSVMF53C.js";

// src/database/outputTypeSchemas/RandomImageFindFirstOrThrowArgsSchema.ts
import { z } from "zod";
var RandomImageSelectSchema = z.object({
  path: z.boolean().optional(),
  createdAt: z.boolean().optional()
}).strict();
var RandomImageFindFirstOrThrowArgsSchema = z.object({
  select: RandomImageSelectSchema.optional(),
  where: RandomImageWhereInputSchema.optional(),
  orderBy: z.union([RandomImageOrderByWithRelationInputSchema.array(), RandomImageOrderByWithRelationInputSchema]).optional(),
  cursor: RandomImageWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([RandomImageScalarFieldEnumSchema, RandomImageScalarFieldEnumSchema.array()]).optional()
}).strict();
var RandomImageFindFirstOrThrowArgsSchema_default = RandomImageFindFirstOrThrowArgsSchema;

export {
  RandomImageSelectSchema,
  RandomImageFindFirstOrThrowArgsSchema,
  RandomImageFindFirstOrThrowArgsSchema_default
};
//# sourceMappingURL=chunk-MUD3XW3W.js.map