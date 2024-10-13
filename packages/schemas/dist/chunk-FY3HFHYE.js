import {
  DJTOrderByWithRelationInputSchema
} from "./chunk-AOAERBSU.js";
import {
  DJTScalarFieldEnumSchema
} from "./chunk-CVJ6WDFJ.js";
import {
  DJTWhereUniqueInputSchema
} from "./chunk-WS6ARYBB.js";
import {
  DJTWhereInputSchema
} from "./chunk-GGQFIP4C.js";

// src/database/outputTypeSchemas/DJTFindFirstOrThrowArgsSchema.ts
import { z } from "zod";
var DJTSelectSchema = z.object({
  id: z.boolean().optional(),
  type: z.boolean().optional(),
  data: z.boolean().optional()
}).strict();
var DJTFindFirstOrThrowArgsSchema = z.object({
  select: DJTSelectSchema.optional(),
  where: DJTWhereInputSchema.optional(),
  orderBy: z.union([DJTOrderByWithRelationInputSchema.array(), DJTOrderByWithRelationInputSchema]).optional(),
  cursor: DJTWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([DJTScalarFieldEnumSchema, DJTScalarFieldEnumSchema.array()]).optional()
}).strict();
var DJTFindFirstOrThrowArgsSchema_default = DJTFindFirstOrThrowArgsSchema;

export {
  DJTSelectSchema,
  DJTFindFirstOrThrowArgsSchema,
  DJTFindFirstOrThrowArgsSchema_default
};
//# sourceMappingURL=chunk-FY3HFHYE.js.map