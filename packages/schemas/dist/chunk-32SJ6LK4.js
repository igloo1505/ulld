import {
  KanBanListWhereUniqueInputSchema
} from "./chunk-QD6ZFSZE.js";
import {
  KanBanListOrderByWithRelationInputSchema
} from "./chunk-RZOHPPB5.js";
import {
  KanBanListWhereInputSchema
} from "./chunk-LSOXTUZL.js";

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
//# sourceMappingURL=chunk-32SJ6LK4.js.map