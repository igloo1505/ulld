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

// src/database/outputTypeSchemas/RandomImageFindManyArgsSchema.ts
import { z } from "zod";
var RandomImageSelectSchema = z.object({
  path: z.boolean().optional(),
  createdAt: z.boolean().optional()
}).strict();
var RandomImageFindManyArgsSchema = z.object({
  select: RandomImageSelectSchema.optional(),
  where: RandomImageWhereInputSchema.optional(),
  orderBy: z.union([RandomImageOrderByWithRelationInputSchema.array(), RandomImageOrderByWithRelationInputSchema]).optional(),
  cursor: RandomImageWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([RandomImageScalarFieldEnumSchema, RandomImageScalarFieldEnumSchema.array()]).optional()
}).strict();
var RandomImageFindManyArgsSchema_default = RandomImageFindManyArgsSchema;

export {
  RandomImageSelectSchema,
  RandomImageFindManyArgsSchema,
  RandomImageFindManyArgsSchema_default
};
//# sourceMappingURL=chunk-STNWZCAF.js.map