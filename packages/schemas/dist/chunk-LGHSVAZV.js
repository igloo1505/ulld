import {
  KanbanWhereUniqueInputSchema
} from "./chunk-2ED7MBMQ.js";
import {
  KanbanOrderByWithRelationInputSchema
} from "./chunk-YHIWEMYT.js";
import {
  KanbanWhereInputSchema
} from "./chunk-XHIJ766H.js";

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
//# sourceMappingURL=chunk-LGHSVAZV.js.map