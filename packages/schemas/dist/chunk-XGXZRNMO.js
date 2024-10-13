import {
  WhiteboardWhereUniqueInputSchema
} from "./chunk-6DC2LE6E.js";

// src/database/outputTypeSchemas/WhiteboardFindUniqueArgsSchema.ts
import { z } from "zod";
var WhiteboardSelectSchema = z.object({
  id: z.boolean().optional(),
  data: z.boolean().optional()
}).strict();
var WhiteboardFindUniqueArgsSchema = z.object({
  select: WhiteboardSelectSchema.optional(),
  where: WhiteboardWhereUniqueInputSchema
}).strict();
var WhiteboardFindUniqueArgsSchema_default = WhiteboardFindUniqueArgsSchema;

export {
  WhiteboardSelectSchema,
  WhiteboardFindUniqueArgsSchema,
  WhiteboardFindUniqueArgsSchema_default
};
//# sourceMappingURL=chunk-XGXZRNMO.js.map