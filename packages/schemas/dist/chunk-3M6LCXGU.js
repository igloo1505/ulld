import {
  WhiteboardCreateInputSchema
} from "./chunk-PJPJGWO5.js";
import {
  WhiteboardUncheckedCreateInputSchema
} from "./chunk-AZ2NTCOQ.js";
import {
  WhiteboardUpdateInputSchema
} from "./chunk-N7ALCZ2J.js";
import {
  WhiteboardUncheckedUpdateInputSchema
} from "./chunk-EKF6DLRY.js";
import {
  WhiteboardWhereUniqueInputSchema
} from "./chunk-AJO3CL4P.js";

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
//# sourceMappingURL=chunk-3M6LCXGU.js.map