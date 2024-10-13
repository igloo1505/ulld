import {
  WhiteboardOrderByWithAggregationInputSchema
} from "./chunk-AOJXR345.js";
import {
  WhiteboardScalarWhereWithAggregatesInputSchema
} from "./chunk-BTA5W3EG.js";
import {
  WhiteboardScalarFieldEnumSchema
} from "./chunk-TEBKPVR3.js";
import {
  WhiteboardWhereInputSchema
} from "./chunk-LIAOFIT7.js";

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
//# sourceMappingURL=chunk-MOFSETDM.js.map