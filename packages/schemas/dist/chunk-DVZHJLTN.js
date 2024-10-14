import {
  QAPairScalarWhereWithAggregatesInputSchema
} from "./chunk-GOAGMWS6.js";
import {
  QAPairOrderByWithAggregationInputSchema
} from "./chunk-KXSBHFIK.js";
import {
  QAPairScalarFieldEnumSchema
} from "./chunk-DJFV4Z7H.js";
import {
  QAPairWhereInputSchema
} from "./chunk-LSOXTUZL.js";

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
//# sourceMappingURL=chunk-DVZHJLTN.js.map