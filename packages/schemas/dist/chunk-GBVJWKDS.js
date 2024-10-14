import {
  ToDoListCreateManyInputSchema
} from "./chunk-WI7JTGLO.js";

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
//# sourceMappingURL=chunk-GBVJWKDS.js.map