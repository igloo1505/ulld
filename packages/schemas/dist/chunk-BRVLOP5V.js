import {
  WhiteboardCreateInputSchema
} from "./chunk-RWWG4FXU.js";
import {
  WhiteboardUncheckedCreateInputSchema
} from "./chunk-2PF5ZIIA.js";
import {
  WhiteboardUpdateInputSchema
} from "./chunk-G6JSWWYM.js";
import {
  WhiteboardUncheckedUpdateInputSchema
} from "./chunk-QNY6V6XW.js";
import {
  WhiteboardWhereUniqueInputSchema
} from "./chunk-6DC2LE6E.js";

// src/database/outputTypeSchemas/WhiteboardUpsertArgsSchema.ts
import { z } from "zod";
var WhiteboardSelectSchema = z.object({
  id: z.boolean().optional(),
  data: z.boolean().optional()
}).strict();
var WhiteboardUpsertArgsSchema = z.object({
  select: WhiteboardSelectSchema.optional(),
  where: WhiteboardWhereUniqueInputSchema,
  create: z.union([WhiteboardCreateInputSchema, WhiteboardUncheckedCreateInputSchema]),
  update: z.union([WhiteboardUpdateInputSchema, WhiteboardUncheckedUpdateInputSchema])
}).strict();
var WhiteboardUpsertArgsSchema_default = WhiteboardUpsertArgsSchema;

export {
  WhiteboardSelectSchema,
  WhiteboardUpsertArgsSchema,
  WhiteboardUpsertArgsSchema_default
};
//# sourceMappingURL=chunk-BRVLOP5V.js.map