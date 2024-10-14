import {
  KanBanCardOrderByWithRelationInputSchema
} from "./chunk-DZXYR76P.js";
import {
  KanBanCardWhereUniqueInputSchema
} from "./chunk-H26KGHY7.js";
import {
  KanBanCardWhereInputSchema
} from "./chunk-LSOXTUZL.js";

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
//# sourceMappingURL=chunk-EXWTXDET.js.map