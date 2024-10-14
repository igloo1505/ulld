import {
  DefinitionOrderByWithRelationInputSchema
} from "./chunk-H6XJHUHH.js";
import {
  DefinitionWhereUniqueInputSchema
} from "./chunk-6Q2POV45.js";
import {
  DefinitionWhereInputSchema
} from "./chunk-LSOXTUZL.js";

// src/database/outputTypeSchemas/DefinitionAggregateArgsSchema.ts
import { z } from "zod";
var DefinitionAggregateArgsSchema = z.object({
  where: DefinitionWhereInputSchema.optional(),
  orderBy: z.union([DefinitionOrderByWithRelationInputSchema.array(), DefinitionOrderByWithRelationInputSchema]).optional(),
  cursor: DefinitionWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional()
}).strict();
var DefinitionAggregateArgsSchema_default = DefinitionAggregateArgsSchema;

export {
  DefinitionAggregateArgsSchema,
  DefinitionAggregateArgsSchema_default
};
//# sourceMappingURL=chunk-JUJAYZBQ.js.map