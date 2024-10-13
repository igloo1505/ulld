import {
  ToDoListCreateManyInputSchema
} from "./chunk-6DQ2HPK5.js";

// src/database/outputTypeSchemas/ToDoListCreateManyAndReturnArgsSchema.ts
import { z } from "zod";
var ToDoListCreateManyAndReturnArgsSchema = z.object({
  data: z.union([ToDoListCreateManyInputSchema, ToDoListCreateManyInputSchema.array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
var ToDoListCreateManyAndReturnArgsSchema_default = ToDoListCreateManyAndReturnArgsSchema;

export {
  ToDoListCreateManyAndReturnArgsSchema,
  ToDoListCreateManyAndReturnArgsSchema_default
};
//# sourceMappingURL=chunk-7RV7HUNH.js.map