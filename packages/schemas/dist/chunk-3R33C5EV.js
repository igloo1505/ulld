import {
  ToDoCreateManyInputSchema
} from "./chunk-445JDRJN.js";

// src/database/outputTypeSchemas/ToDoCreateManyArgsSchema.ts
import { z } from "zod";
var ToDoCreateManyArgsSchema = z.object({
  data: z.union([ToDoCreateManyInputSchema, ToDoCreateManyInputSchema.array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
var ToDoCreateManyArgsSchema_default = ToDoCreateManyArgsSchema;

export {
  ToDoCreateManyArgsSchema,
  ToDoCreateManyArgsSchema_default
};
//# sourceMappingURL=chunk-3R33C5EV.js.map