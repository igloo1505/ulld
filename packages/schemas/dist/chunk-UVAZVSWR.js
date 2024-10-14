import {
  EquationOrderByWithRelationInputSchema
} from "./chunk-V3JQFU2U.js";
import {
  EquationWhereUniqueInputSchema
} from "./chunk-ZHPM3YVS.js";
import {
  EquationWhereInputSchema
} from "./chunk-LSOXTUZL.js";

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
//# sourceMappingURL=chunk-UVAZVSWR.js.map