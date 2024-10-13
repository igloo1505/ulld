import {
  KanBanListOrderByWithAggregationInputSchema
} from "./chunk-RLUH46QS.js";
import {
  KanBanListScalarWhereWithAggregatesInputSchema
} from "./chunk-MR6BGO5E.js";
import {
  KanBanListScalarFieldEnumSchema
} from "./chunk-DNNETPDA.js";
import {
  KanBanListWhereInputSchema
} from "./chunk-XHIJ766H.js";

// src/database/outputTypeSchemas/KanBanListGroupByArgsSchema.ts
import { z } from "zod";
var KanBanListGroupByArgsSchema = z.object({
  where: KanBanListWhereInputSchema.optional(),
  orderBy: z.union([KanBanListOrderByWithAggregationInputSchema.array(), KanBanListOrderByWithAggregationInputSchema]).optional(),
  by: KanBanListScalarFieldEnumSchema.array(),
  having: KanBanListScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional()
}).strict();
var KanBanListGroupByArgsSchema_default = KanBanListGroupByArgsSchema;

export {
  KanBanListGroupByArgsSchema,
  KanBanListGroupByArgsSchema_default
};
//# sourceMappingURL=chunk-E45KHBHJ.js.map