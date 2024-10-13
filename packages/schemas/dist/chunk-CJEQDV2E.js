import {
  DefinitionOrderByWithAggregationInputSchema
} from "./chunk-OWWFZAJZ.js";
import {
  DefinitionScalarWhereWithAggregatesInputSchema
} from "./chunk-DTUXKHB6.js";
import {
  DefinitionScalarFieldEnumSchema
} from "./chunk-G3MC4RUQ.js";
import {
  DefinitionWhereInputSchema
} from "./chunk-XHIJ766H.js";

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
//# sourceMappingURL=chunk-CJEQDV2E.js.map