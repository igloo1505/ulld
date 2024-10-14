import {
  WhiteboardWhereUniqueInputSchema
} from "./chunk-AJO3CL4P.js";

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
//# sourceMappingURL=chunk-WFDMHE67.js.map