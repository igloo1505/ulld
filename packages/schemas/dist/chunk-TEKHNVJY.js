import {
  ToDoCreateManyInputSchema
} from "./chunk-UX5HYUTO.js";

// src/database/outputTypeSchemas/ToDoCreateManyAndReturnArgsSchema.ts
import { z } from "zod";
var ToDoCreateManyAndReturnArgsSchema = z.object({
  data: z.union([ToDoCreateManyInputSchema, ToDoCreateManyInputSchema.array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
var ToDoCreateManyAndReturnArgsSchema_default = ToDoCreateManyAndReturnArgsSchema;

export {
  ToDoCreateManyAndReturnArgsSchema,
  ToDoCreateManyAndReturnArgsSchema_default
};
//# sourceMappingURL=chunk-TEKHNVJY.js.map