import {
  KanBanListOrderByWithAggregationInputSchema
} from "./chunk-XZOHEDEY.js";
import {
  KanBanListScalarWhereWithAggregatesInputSchema
} from "./chunk-R6PD7IB5.js";
import {
  KanBanListScalarFieldEnumSchema
} from "./chunk-BENEIZWA.js";
import {
  KanBanListWhereInputSchema
} from "./chunk-LSOXTUZL.js";

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
//# sourceMappingURL=chunk-RAYV2GI5.js.map