import {
  ToDoListCreateManyInputSchema
} from "./chunk-WI7JTGLO.js";

// src/database/outputTypeSchemas/ToDoListCreateManyArgsSchema.ts
import { z } from "zod";
var ToDoListCreateManyArgsSchema = z.object({
  data: z.union([ToDoListCreateManyInputSchema, ToDoListCreateManyInputSchema.array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
var ToDoListCreateManyArgsSchema_default = ToDoListCreateManyArgsSchema;

export {
  ToDoListCreateManyArgsSchema,
  ToDoListCreateManyArgsSchema_default
};
//# sourceMappingURL=chunk-J7MR44YY.js.map