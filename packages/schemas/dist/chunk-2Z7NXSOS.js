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

// src/database/outputTypeSchemas/FeatureRequestFindFirstArgsSchema.ts
import { z } from "zod";
var FeatureRequestSelectSchema = z.object({
  id: z.boolean().optional(),
  email: z.boolean().optional(),
  message: z.boolean().optional(),
  category: z.boolean().optional(),
  userBase: z.boolean().optional(),
  receivedOn: z.boolean().optional()
}).strict();
var FeatureRequestFindFirstArgsSchema = z.object({
  select: FeatureRequestSelectSchema.optional(),
  where: FeatureRequestWhereInputSchema.optional(),
  orderBy: z.union([FeatureRequestOrderByWithRelationInputSchema.array(), FeatureRequestOrderByWithRelationInputSchema]).optional(),
  cursor: FeatureRequestWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([FeatureRequestScalarFieldEnumSchema, FeatureRequestScalarFieldEnumSchema.array()]).optional()
}).strict();
var FeatureRequestFindFirstArgsSchema_default = FeatureRequestFindFirstArgsSchema;

export {
  FeatureRequestSelectSchema,
  FeatureRequestFindFirstArgsSchema,
  FeatureRequestFindFirstArgsSchema_default
};
//# sourceMappingURL=chunk-2Z7NXSOS.js.map