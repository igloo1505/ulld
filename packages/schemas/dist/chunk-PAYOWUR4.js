import {
  DJTOrderByWithRelationInputSchema
} from "./chunk-E2HOW4GC.js";
import {
  DJTScalarFieldEnumSchema
} from "./chunk-ZUCVAFGH.js";
import {
  DJTWhereUniqueInputSchema
} from "./chunk-ZKHP557W.js";
import {
  DJTWhereInputSchema
} from "./chunk-AMDBRTLV.js";

// src/database/outputTypeSchemas/DJTFindFirstArgsSchema.ts
import { z } from "zod";
var DJTSelectSchema = z.object({
  id: z.boolean().optional(),
  type: z.boolean().optional(),
  data: z.boolean().optional()
}).strict();
var DJTFindFirstArgsSchema = z.object({
  select: DJTSelectSchema.optional(),
  where: DJTWhereInputSchema.optional(),
  orderBy: z.union([DJTOrderByWithRelationInputSchema.array(), DJTOrderByWithRelationInputSchema]).optional(),
  cursor: DJTWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([DJTScalarFieldEnumSchema, DJTScalarFieldEnumSchema.array()]).optional()
}).strict();
var DJTFindFirstArgsSchema_default = DJTFindFirstArgsSchema;

export {
  DJTSelectSchema,
  DJTFindFirstArgsSchema,
  DJTFindFirstArgsSchema_default
};
//# sourceMappingURL=chunk-PAYOWUR4.js.map