import {
  KanBanListWhereUniqueInputSchema
} from "./chunk-Q7SPJQ4F.js";
import {
  KanBanListOrderByWithRelationInputSchema
} from "./chunk-ZU3NMEDR.js";
import {
  KanBanListWhereInputSchema
} from "./chunk-XHIJ766H.js";

// src/database/outputTypeSchemas/KanBanListAggregateArgsSchema.ts
import { z } from "zod";
var KanBanListAggregateArgsSchema = z.object({
  where: KanBanListWhereInputSchema.optional(),
  orderBy: z.union([KanBanListOrderByWithRelationInputSchema.array(), KanBanListOrderByWithRelationInputSchema]).optional(),
  cursor: KanBanListWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional()
}).strict();
var KanBanListAggregateArgsSchema_default = KanBanListAggregateArgsSchema;

export {
  KanBanListAggregateArgsSchema,
  KanBanListAggregateArgsSchema_default
};
//# sourceMappingURL=chunk-6CRXOKYG.js.map