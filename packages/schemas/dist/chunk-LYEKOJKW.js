import {
  FeatureRequestOrderByWithRelationInputSchema
} from "./chunk-ARBAHK5O.js";
import {
  FeatureRequestScalarFieldEnumSchema
} from "./chunk-UA6KKIKA.js";
import {
  FeatureRequestWhereUniqueInputSchema
} from "./chunk-VXVNZ6LJ.js";
import {
  FeatureRequestWhereInputSchema
} from "./chunk-JXUPWJVB.js";

// src/database/outputTypeSchemas/FeatureRequestFindManyArgsSchema.ts
import { z } from "zod";
var FeatureRequestSelectSchema = z.object({
  id: z.boolean().optional(),
  email: z.boolean().optional(),
  message: z.boolean().optional(),
  category: z.boolean().optional(),
  userBase: z.boolean().optional(),
  receivedOn: z.boolean().optional()
}).strict();
var FeatureRequestFindManyArgsSchema = z.object({
  select: FeatureRequestSelectSchema.optional(),
  where: FeatureRequestWhereInputSchema.optional(),
  orderBy: z.union([FeatureRequestOrderByWithRelationInputSchema.array(), FeatureRequestOrderByWithRelationInputSchema]).optional(),
  cursor: FeatureRequestWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([FeatureRequestScalarFieldEnumSchema, FeatureRequestScalarFieldEnumSchema.array()]).optional()
}).strict();
var FeatureRequestFindManyArgsSchema_default = FeatureRequestFindManyArgsSchema;

export {
  FeatureRequestSelectSchema,
  FeatureRequestFindManyArgsSchema,
  FeatureRequestFindManyArgsSchema_default
};
//# sourceMappingURL=chunk-LYEKOJKW.js.map