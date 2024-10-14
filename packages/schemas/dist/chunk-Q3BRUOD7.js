import {
  WhiteboardUpdateInputSchema
} from "./chunk-N7ALCZ2J.js";
import {
  WhiteboardUncheckedUpdateInputSchema
} from "./chunk-EKF6DLRY.js";
import {
  WhiteboardWhereUniqueInputSchema
} from "./chunk-AJO3CL4P.js";

// src/database/outputTypeSchemas/WhiteboardUpdateArgsSchema.ts
import { z } from "zod";
var WhiteboardSelectSchema = z.object({
  id: z.boolean().optional(),
  data: z.boolean().optional()
}).strict();
var WhiteboardUpdateArgsSchema = z.object({
  select: WhiteboardSelectSchema.optional(),
  data: z.union([WhiteboardUpdateInputSchema, WhiteboardUncheckedUpdateInputSchema]),
  where: WhiteboardWhereUniqueInputSchema
}).strict();
var WhiteboardUpdateArgsSchema_default = WhiteboardUpdateArgsSchema;

export {
  WhiteboardSelectSchema,
  WhiteboardUpdateArgsSchema,
  WhiteboardUpdateArgsSchema_default
};
//# sourceMappingURL=chunk-Q3BRUOD7.js.map