import {
  WhiteboardCreateInputSchema
} from "./chunk-PJPJGWO5.js";
import {
  WhiteboardUncheckedCreateInputSchema
} from "./chunk-AZ2NTCOQ.js";

// src/database/outputTypeSchemas/WhiteboardCreateArgsSchema.ts
import { z } from "zod";
var WhiteboardSelectSchema = z.object({
  id: z.boolean().optional(),
  data: z.boolean().optional()
}).strict();
var WhiteboardCreateArgsSchema = z.object({
  select: WhiteboardSelectSchema.optional(),
  data: z.union([WhiteboardCreateInputSchema, WhiteboardUncheckedCreateInputSchema])
}).strict();
var WhiteboardCreateArgsSchema_default = WhiteboardCreateArgsSchema;

export {
  WhiteboardSelectSchema,
  WhiteboardCreateArgsSchema,
  WhiteboardCreateArgsSchema_default
};
//# sourceMappingURL=chunk-ZNHBB3CM.js.map