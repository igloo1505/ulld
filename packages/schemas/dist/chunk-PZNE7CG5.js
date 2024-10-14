import {
  KanbanWhereUniqueInputSchema
} from "./chunk-YCFKQOM4.js";
import {
  KanbanOrderByWithRelationInputSchema
} from "./chunk-U2O53X3F.js";
import {
  KanbanWhereInputSchema
} from "./chunk-LSOXTUZL.js";

// src/database/outputTypeSchemas/KanbanAggregateArgsSchema.ts
import { z } from "zod";
var KanbanAggregateArgsSchema = z.object({
  where: KanbanWhereInputSchema.optional(),
  orderBy: z.union([KanbanOrderByWithRelationInputSchema.array(), KanbanOrderByWithRelationInputSchema]).optional(),
  cursor: KanbanWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional()
}).strict();
var KanbanAggregateArgsSchema_default = KanbanAggregateArgsSchema;

export {
  KanbanAggregateArgsSchema,
  KanbanAggregateArgsSchema_default
};
//# sourceMappingURL=chunk-PZNE7CG5.js.map