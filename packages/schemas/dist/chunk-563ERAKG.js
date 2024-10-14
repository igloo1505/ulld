import {
  EquationScalarWhereWithAggregatesInputSchema
} from "./chunk-QIX2QD6S.js";
import {
  EquationOrderByWithAggregationInputSchema
} from "./chunk-6F36DGHM.js";
import {
  EquationScalarFieldEnumSchema
} from "./chunk-I7LBMM7X.js";
import {
  EquationWhereInputSchema
} from "./chunk-LSOXTUZL.js";

// src/database/outputTypeSchemas/EquationGroupByArgsSchema.ts
import { z } from "zod";
var EquationGroupByArgsSchema = z.object({
  where: EquationWhereInputSchema.optional(),
  orderBy: z.union([EquationOrderByWithAggregationInputSchema.array(), EquationOrderByWithAggregationInputSchema]).optional(),
  by: EquationScalarFieldEnumSchema.array(),
  having: EquationScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional()
}).strict();
var EquationGroupByArgsSchema_default = EquationGroupByArgsSchema;

export {
  EquationGroupByArgsSchema,
  EquationGroupByArgsSchema_default
};
//# sourceMappingURL=chunk-563ERAKG.js.map