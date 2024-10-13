import {
  KanbanCreateManyInputSchema
} from "./chunk-Y24TU4NS.js";

// src/database/outputTypeSchemas/KanbanCreateManyArgsSchema.ts
import { z } from "zod";
var KanbanCreateManyArgsSchema = z.object({
  data: z.union([KanbanCreateManyInputSchema, KanbanCreateManyInputSchema.array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
var KanbanCreateManyArgsSchema_default = KanbanCreateManyArgsSchema;

export {
  KanbanCreateManyArgsSchema,
  KanbanCreateManyArgsSchema_default
};
//# sourceMappingURL=chunk-XOZFDZJI.js.map