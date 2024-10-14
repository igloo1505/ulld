import {
  WhiteboardWhereUniqueInputSchema
} from "./chunk-AJO3CL4P.js";

// src/database/outputTypeSchemas/WhiteboardDeleteArgsSchema.ts
import { z } from "zod";
var WhiteboardSelectSchema = z.object({
  id: z.boolean().optional(),
  data: z.boolean().optional()
}).strict();
var WhiteboardDeleteArgsSchema = z.object({
  select: WhiteboardSelectSchema.optional(),
  where: WhiteboardWhereUniqueInputSchema
}).strict();
var WhiteboardDeleteArgsSchema_default = WhiteboardDeleteArgsSchema;

export {
  WhiteboardSelectSchema,
  WhiteboardDeleteArgsSchema,
  WhiteboardDeleteArgsSchema_default
};
//# sourceMappingURL=chunk-OHQCJQUX.js.map