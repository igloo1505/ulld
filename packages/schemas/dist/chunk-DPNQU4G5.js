// src/database/outputTypeSchemas/ToDoCountOutputTypeSelectSchema.ts
import { z } from "zod";
var ToDoCountOutputTypeSelectSchema = z.object({
  associatedNotes: z.boolean().optional(),
  tags: z.boolean().optional(),
  topics: z.boolean().optional(),
  subjects: z.boolean().optional(),
  child: z.boolean().optional()
}).strict();
var ToDoCountOutputTypeSelectSchema_default = ToDoCountOutputTypeSelectSchema;

export {
  ToDoCountOutputTypeSelectSchema,
  ToDoCountOutputTypeSelectSchema_default
};
//# sourceMappingURL=chunk-DPNQU4G5.js.map