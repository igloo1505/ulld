import {
  WhiteboardOrderByWithRelationInputSchema
} from "./chunk-S2WQGTUF.js";
import {
  WhiteboardWhereUniqueInputSchema
} from "./chunk-6DC2LE6E.js";
import {
  WhiteboardWhereInputSchema
} from "./chunk-LIAOFIT7.js";

// src/database/outputTypeSchemas/WhiteboardAggregateArgsSchema.ts
import { z } from "zod";
var WhiteboardAggregateArgsSchema = z.object({
  where: WhiteboardWhereInputSchema.optional(),
  orderBy: z.union([WhiteboardOrderByWithRelationInputSchema.array(), WhiteboardOrderByWithRelationInputSchema]).optional(),
  cursor: WhiteboardWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional()
}).strict();
var WhiteboardAggregateArgsSchema_default = WhiteboardAggregateArgsSchema;

export {
  WhiteboardAggregateArgsSchema,
  WhiteboardAggregateArgsSchema_default
};
//# sourceMappingURL=chunk-KOLCSR4X.js.map