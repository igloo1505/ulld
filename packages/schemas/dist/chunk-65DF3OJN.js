import {
  RandomImageOrderByWithRelationInputSchema
} from "./chunk-W4VTW4KM.js";
import {
  RandomImageScalarFieldEnumSchema
} from "./chunk-ITW743ZM.js";
import {
  RandomImageWhereUniqueInputSchema
} from "./chunk-ZEPTB4HC.js";
import {
  RandomImageWhereInputSchema
} from "./chunk-U7V5V5ZX.js";

// src/database/outputTypeSchemas/RandomImageFindFirstArgsSchema.ts
import { z } from "zod";
var RandomImageSelectSchema = z.object({
  path: z.boolean().optional(),
  createdAt: z.boolean().optional()
}).strict();
var RandomImageFindFirstArgsSchema = z.object({
  select: RandomImageSelectSchema.optional(),
  where: RandomImageWhereInputSchema.optional(),
  orderBy: z.union([RandomImageOrderByWithRelationInputSchema.array(), RandomImageOrderByWithRelationInputSchema]).optional(),
  cursor: RandomImageWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([RandomImageScalarFieldEnumSchema, RandomImageScalarFieldEnumSchema.array()]).optional()
}).strict();
var RandomImageFindFirstArgsSchema_default = RandomImageFindFirstArgsSchema;

export {
  RandomImageSelectSchema,
  RandomImageFindFirstArgsSchema,
  RandomImageFindFirstArgsSchema_default
};
//# sourceMappingURL=chunk-65DF3OJN.js.map