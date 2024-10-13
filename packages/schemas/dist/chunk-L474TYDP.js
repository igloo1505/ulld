import {
  QAPairScalarWhereWithAggregatesInputSchema
} from "./chunk-TRALHVPS.js";
import {
  QAPairOrderByWithAggregationInputSchema
} from "./chunk-76VOCK4E.js";
import {
  QAPairScalarFieldEnumSchema
} from "./chunk-QUCMP4ES.js";
import {
  QAPairWhereInputSchema
} from "./chunk-XHIJ766H.js";

// src/database/outputTypeSchemas/QAPairGroupByArgsSchema.ts
import { z } from "zod";
var QAPairGroupByArgsSchema = z.object({
  where: QAPairWhereInputSchema.optional(),
  orderBy: z.union([QAPairOrderByWithAggregationInputSchema.array(), QAPairOrderByWithAggregationInputSchema]).optional(),
  by: QAPairScalarFieldEnumSchema.array(),
  having: QAPairScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional()
}).strict();
var QAPairGroupByArgsSchema_default = QAPairGroupByArgsSchema;

export {
  QAPairGroupByArgsSchema,
  QAPairGroupByArgsSchema_default
};
//# sourceMappingURL=chunk-L474TYDP.js.map