import {
  WhiteboardOrderByWithAggregationInputSchema
} from "./chunk-7452BRH7.js";
import {
  WhiteboardScalarWhereWithAggregatesInputSchema
} from "./chunk-7OYOOWEX.js";
import {
  WhiteboardScalarFieldEnumSchema
} from "./chunk-GX5DG2BL.js";
import {
  WhiteboardWhereInputSchema
} from "./chunk-ZAT5W63Y.js";

// src/database/outputTypeSchemas/WhiteboardGroupByArgsSchema.ts
import { z } from "zod";
var WhiteboardGroupByArgsSchema = z.object({
  where: WhiteboardWhereInputSchema.optional(),
  orderBy: z.union([WhiteboardOrderByWithAggregationInputSchema.array(), WhiteboardOrderByWithAggregationInputSchema]).optional(),
  by: WhiteboardScalarFieldEnumSchema.array(),
  having: WhiteboardScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional()
}).strict();
var WhiteboardGroupByArgsSchema_default = WhiteboardGroupByArgsSchema;

export {
  WhiteboardGroupByArgsSchema,
  WhiteboardGroupByArgsSchema_default
};
//# sourceMappingURL=chunk-WIKVB5TM.js.map