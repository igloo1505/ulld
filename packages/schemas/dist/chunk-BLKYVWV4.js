import {
  WhiteboardOrderByWithRelationInputSchema
} from "./chunk-XZRW5BDB.js";
import {
  WhiteboardWhereUniqueInputSchema
} from "./chunk-AJO3CL4P.js";
import {
  WhiteboardWhereInputSchema
} from "./chunk-ZAT5W63Y.js";

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
//# sourceMappingURL=chunk-BLKYVWV4.js.map