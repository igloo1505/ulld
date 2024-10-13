import {
  WhiteboardUpdateInputSchema
} from "./chunk-G6JSWWYM.js";
import {
  WhiteboardUncheckedUpdateInputSchema
} from "./chunk-QNY6V6XW.js";
import {
  WhiteboardWhereUniqueInputSchema
} from "./chunk-6DC2LE6E.js";

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
//# sourceMappingURL=chunk-MDOY7TB2.js.map