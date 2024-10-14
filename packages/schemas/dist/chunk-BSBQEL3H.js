import {
  KanBanCardScalarWhereWithAggregatesInputSchema
} from "./chunk-WBTTNOBS.js";
import {
  KanBanCardOrderByWithAggregationInputSchema
} from "./chunk-X5QRSDOB.js";
import {
  KanBanCardScalarFieldEnumSchema
} from "./chunk-FXL2P2MF.js";
import {
  KanBanCardWhereInputSchema
} from "./chunk-LSOXTUZL.js";

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
//# sourceMappingURL=chunk-BSBQEL3H.js.map