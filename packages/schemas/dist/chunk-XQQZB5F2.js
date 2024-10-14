import {
  KanbanScalarWhereWithAggregatesInputSchema
} from "./chunk-5CNYCWP3.js";
import {
  KanbanOrderByWithAggregationInputSchema
} from "./chunk-AKGT5RB3.js";
import {
  KanbanScalarFieldEnumSchema
} from "./chunk-ZMBA6D2Z.js";
import {
  KanbanWhereInputSchema
} from "./chunk-LSOXTUZL.js";

// src/database/outputTypeSchemas/KanbanGroupByArgsSchema.ts
import { z } from "zod";
var KanbanGroupByArgsSchema = z.object({
  where: KanbanWhereInputSchema.optional(),
  orderBy: z.union([KanbanOrderByWithAggregationInputSchema.array(), KanbanOrderByWithAggregationInputSchema]).optional(),
  by: KanbanScalarFieldEnumSchema.array(),
  having: KanbanScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional()
}).strict();
var KanbanGroupByArgsSchema_default = KanbanGroupByArgsSchema;

export {
  KanbanGroupByArgsSchema,
  KanbanGroupByArgsSchema_default
};
//# sourceMappingURL=chunk-XQQZB5F2.js.map