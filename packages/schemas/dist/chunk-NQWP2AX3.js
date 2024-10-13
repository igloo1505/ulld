import {
  KanbanCreateManyInputSchema
} from "./chunk-Y24TU4NS.js";

// src/database/outputTypeSchemas/KanbanCreateManyAndReturnArgsSchema.ts
import { z } from "zod";
var KanbanCreateManyAndReturnArgsSchema = z.object({
  data: z.union([KanbanCreateManyInputSchema, KanbanCreateManyInputSchema.array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
var KanbanCreateManyAndReturnArgsSchema_default = KanbanCreateManyAndReturnArgsSchema;

export {
  KanbanCreateManyAndReturnArgsSchema,
  KanbanCreateManyAndReturnArgsSchema_default
};
//# sourceMappingURL=chunk-NQWP2AX3.js.map