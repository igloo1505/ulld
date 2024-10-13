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
//# sourceMappingURL=chunk-CJMWXDUH.js.map