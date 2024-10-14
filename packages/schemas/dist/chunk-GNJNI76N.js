import {
  DefinitionOrderByWithAggregationInputSchema
} from "./chunk-7HQWY5OZ.js";
import {
  DefinitionScalarWhereWithAggregatesInputSchema
} from "./chunk-NDRNE74Y.js";
import {
  DefinitionScalarFieldEnumSchema
} from "./chunk-JNHEMUNF.js";
import {
  DefinitionWhereInputSchema
} from "./chunk-LSOXTUZL.js";

// src/database/outputTypeSchemas/DefinitionGroupByArgsSchema.ts
import { z } from "zod";
var DefinitionGroupByArgsSchema = z.object({
  where: DefinitionWhereInputSchema.optional(),
  orderBy: z.union([DefinitionOrderByWithAggregationInputSchema.array(), DefinitionOrderByWithAggregationInputSchema]).optional(),
  by: DefinitionScalarFieldEnumSchema.array(),
  having: DefinitionScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional()
}).strict();
var DefinitionGroupByArgsSchema_default = DefinitionGroupByArgsSchema;

export {
  DefinitionGroupByArgsSchema,
  DefinitionGroupByArgsSchema_default
};
//# sourceMappingURL=chunk-GNJNI76N.js.map