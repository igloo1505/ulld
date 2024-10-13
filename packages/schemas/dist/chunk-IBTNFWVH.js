import {
  EquationOrderByWithRelationInputSchema
} from "./chunk-OU75RI3H.js";
import {
  EquationWhereUniqueInputSchema
} from "./chunk-5LG4UXJA.js";
import {
  EquationWhereInputSchema
} from "./chunk-XHIJ766H.js";

// src/database/outputTypeSchemas/EquationAggregateArgsSchema.ts
import { z } from "zod";
var EquationAggregateArgsSchema = z.object({
  where: EquationWhereInputSchema.optional(),
  orderBy: z.union([EquationOrderByWithRelationInputSchema.array(), EquationOrderByWithRelationInputSchema]).optional(),
  cursor: EquationWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional()
}).strict();
var EquationAggregateArgsSchema_default = EquationAggregateArgsSchema;

export {
  EquationAggregateArgsSchema,
  EquationAggregateArgsSchema_default
};
//# sourceMappingURL=chunk-IBTNFWVH.js.map