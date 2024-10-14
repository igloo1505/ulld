import {
  RandomImageScalarWhereWithAggregatesInputSchema
} from "./chunk-STT77UOW.js";
import {
  RandomImageOrderByWithAggregationInputSchema
} from "./chunk-UPCOX25P.js";
import {
  RandomImageScalarFieldEnumSchema
} from "./chunk-JIHEBZY7.js";
import {
  RandomImageWhereInputSchema
} from "./chunk-XSVMF53C.js";

// src/database/outputTypeSchemas/RandomImageGroupByArgsSchema.ts
import { z } from "zod";
var RandomImageGroupByArgsSchema = z.object({
  where: RandomImageWhereInputSchema.optional(),
  orderBy: z.union([RandomImageOrderByWithAggregationInputSchema.array(), RandomImageOrderByWithAggregationInputSchema]).optional(),
  by: RandomImageScalarFieldEnumSchema.array(),
  having: RandomImageScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional()
}).strict();
var RandomImageGroupByArgsSchema_default = RandomImageGroupByArgsSchema;

export {
  RandomImageGroupByArgsSchema,
  RandomImageGroupByArgsSchema_default
};
//# sourceMappingURL=chunk-WR5L4SS7.js.map