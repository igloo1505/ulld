import {
  ReadingListScalarWhereWithAggregatesInputSchema
} from "./chunk-3YYSLSD2.js";
import {
  ReadingListOrderByWithAggregationInputSchema
} from "./chunk-UMZWEMIT.js";
import {
  ReadingListScalarFieldEnumSchema
} from "./chunk-MZFNSGGS.js";
import {
  ReadingListWhereInputSchema
} from "./chunk-LSOXTUZL.js";

// src/database/outputTypeSchemas/ReadingListGroupByArgsSchema.ts
import { z } from "zod";
var ReadingListGroupByArgsSchema = z.object({
  where: ReadingListWhereInputSchema.optional(),
  orderBy: z.union([ReadingListOrderByWithAggregationInputSchema.array(), ReadingListOrderByWithAggregationInputSchema]).optional(),
  by: ReadingListScalarFieldEnumSchema.array(),
  having: ReadingListScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional()
}).strict();
var ReadingListGroupByArgsSchema_default = ReadingListGroupByArgsSchema;

export {
  ReadingListGroupByArgsSchema,
  ReadingListGroupByArgsSchema_default
};
//# sourceMappingURL=chunk-F3PW54YP.js.map