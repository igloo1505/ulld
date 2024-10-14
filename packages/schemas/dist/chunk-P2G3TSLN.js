import {
  FeatureRequestOrderByWithRelationInputSchema
} from "./chunk-LQ5LKVMZ.js";
import {
  FeatureRequestScalarFieldEnumSchema
} from "./chunk-OUYI6IKH.js";
import {
  FeatureRequestWhereUniqueInputSchema
} from "./chunk-RQECGBYQ.js";
import {
  FeatureRequestWhereInputSchema
} from "./chunk-DVDRYS7P.js";

// src/database/outputTypeSchemas/FeatureRequestFindFirstOrThrowArgsSchema.ts
import { z } from "zod";
var FeatureRequestSelectSchema = z.object({
  id: z.boolean().optional(),
  email: z.boolean().optional(),
  message: z.boolean().optional(),
  category: z.boolean().optional(),
  userBase: z.boolean().optional(),
  receivedOn: z.boolean().optional()
}).strict();
var FeatureRequestFindFirstOrThrowArgsSchema = z.object({
  select: FeatureRequestSelectSchema.optional(),
  where: FeatureRequestWhereInputSchema.optional(),
  orderBy: z.union([FeatureRequestOrderByWithRelationInputSchema.array(), FeatureRequestOrderByWithRelationInputSchema]).optional(),
  cursor: FeatureRequestWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([FeatureRequestScalarFieldEnumSchema, FeatureRequestScalarFieldEnumSchema.array()]).optional()
}).strict();
var FeatureRequestFindFirstOrThrowArgsSchema_default = FeatureRequestFindFirstOrThrowArgsSchema;

export {
  FeatureRequestSelectSchema,
  FeatureRequestFindFirstOrThrowArgsSchema,
  FeatureRequestFindFirstOrThrowArgsSchema_default
};
//# sourceMappingURL=chunk-P2G3TSLN.js.map