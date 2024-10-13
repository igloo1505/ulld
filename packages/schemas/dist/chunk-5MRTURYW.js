import {
  KanbanScalarWhereWithAggregatesInputSchema
} from "./chunk-FHGHGTY7.js";
import {
  KanbanOrderByWithAggregationInputSchema
} from "./chunk-AVIF7IZ2.js";
import {
  KanbanScalarFieldEnumSchema
} from "./chunk-JBOO4DUT.js";
import {
  KanbanWhereInputSchema
} from "./chunk-XHIJ766H.js";

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
//# sourceMappingURL=chunk-5MRTURYW.js.map