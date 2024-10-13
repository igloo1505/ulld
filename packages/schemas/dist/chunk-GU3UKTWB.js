// src/database/outputTypeSchemas/ToDoListCountOutputTypeSelectSchema.ts
import { z } from "zod";
var ToDoListCountOutputTypeSelectSchema = z.object({
  tasks: z.boolean().optional(),
  tags: z.boolean().optional(),
  topics: z.boolean().optional(),
  subjects: z.boolean().optional()
}).strict();
var ToDoListCountOutputTypeSelectSchema_default = ToDoListCountOutputTypeSelectSchema;

export {
  ToDoListCountOutputTypeSelectSchema,
  ToDoListCountOutputTypeSelectSchema_default
};
//# sourceMappingURL=chunk-GU3UKTWB.js.map