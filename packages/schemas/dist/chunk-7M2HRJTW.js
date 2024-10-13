import {
  WhiteboardWhereUniqueInputSchema
} from "./chunk-6DC2LE6E.js";

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
//# sourceMappingURL=chunk-7M2HRJTW.js.map