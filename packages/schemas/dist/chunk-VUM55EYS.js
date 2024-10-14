import {
  QAPairOrderByWithRelationInputSchema
} from "./chunk-ULZ7G2UB.js";
import {
  QAPairWhereUniqueInputSchema
} from "./chunk-B2UXPVL4.js";
import {
  QAPairWhereInputSchema
} from "./chunk-LSOXTUZL.js";

// src/database/outputTypeSchemas/QAPairAggregateArgsSchema.ts
import { z } from "zod";
var QAPairAggregateArgsSchema = z.object({
  where: QAPairWhereInputSchema.optional(),
  orderBy: z.union([QAPairOrderByWithRelationInputSchema.array(), QAPairOrderByWithRelationInputSchema]).optional(),
  cursor: QAPairWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional()
}).strict();
var QAPairAggregateArgsSchema_default = QAPairAggregateArgsSchema;

export {
  QAPairAggregateArgsSchema,
  QAPairAggregateArgsSchema_default
};
//# sourceMappingURL=chunk-VUM55EYS.js.map