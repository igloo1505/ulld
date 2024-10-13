import {
  DefinitionOrderByWithRelationInputSchema
} from "./chunk-BOIIGQPH.js";
import {
  DefinitionWhereUniqueInputSchema
} from "./chunk-M33QKPZF.js";
import {
  DefinitionWhereInputSchema
} from "./chunk-XHIJ766H.js";

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
//# sourceMappingURL=chunk-ERJTJTQQ.js.map