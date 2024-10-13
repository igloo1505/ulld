import {
  KanBanCardScalarWhereWithAggregatesInputSchema
} from "./chunk-EVEXV467.js";
import {
  KanBanCardOrderByWithAggregationInputSchema
} from "./chunk-TWLGFQXQ.js";
import {
  KanBanCardScalarFieldEnumSchema
} from "./chunk-ONWJJVRE.js";
import {
  KanBanCardWhereInputSchema
} from "./chunk-XHIJ766H.js";

// src/database/outputTypeSchemas/KanBanCardGroupByArgsSchema.ts
import { z } from "zod";
var KanBanCardGroupByArgsSchema = z.object({
  where: KanBanCardWhereInputSchema.optional(),
  orderBy: z.union([KanBanCardOrderByWithAggregationInputSchema.array(), KanBanCardOrderByWithAggregationInputSchema]).optional(),
  by: KanBanCardScalarFieldEnumSchema.array(),
  having: KanBanCardScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional()
}).strict();
var KanBanCardGroupByArgsSchema_default = KanBanCardGroupByArgsSchema;

export {
  KanBanCardGroupByArgsSchema,
  KanBanCardGroupByArgsSchema_default
};
//# sourceMappingURL=chunk-D4OOFGH5.js.map