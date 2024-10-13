import {
  KanBanCardOrderByWithRelationInputSchema
} from "./chunk-GETLPK5J.js";
import {
  KanBanCardWhereUniqueInputSchema
} from "./chunk-XZKFFDAH.js";
import {
  KanBanCardWhereInputSchema
} from "./chunk-XHIJ766H.js";

// src/database/outputTypeSchemas/KanBanCardAggregateArgsSchema.ts
import { z } from "zod";
var KanBanCardAggregateArgsSchema = z.object({
  where: KanBanCardWhereInputSchema.optional(),
  orderBy: z.union([KanBanCardOrderByWithRelationInputSchema.array(), KanBanCardOrderByWithRelationInputSchema]).optional(),
  cursor: KanBanCardWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional()
}).strict();
var KanBanCardAggregateArgsSchema_default = KanBanCardAggregateArgsSchema;

export {
  KanBanCardAggregateArgsSchema,
  KanBanCardAggregateArgsSchema_default
};
//# sourceMappingURL=chunk-HKM5HIYT.js.map