import {
  EquationScalarWhereWithAggregatesInputSchema
} from "./chunk-IL4ITEWX.js";
import {
  EquationOrderByWithAggregationInputSchema
} from "./chunk-7RYWZZRK.js";
import {
  EquationScalarFieldEnumSchema
} from "./chunk-QGOGRLID.js";
import {
  EquationWhereInputSchema
} from "./chunk-XHIJ766H.js";

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
//# sourceMappingURL=chunk-YJQRHZJU.js.map