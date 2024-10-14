import {
  ToDoListCountOutputTypeSelectSchema
} from "./chunk-RVFQK375.js";

// src/database/outputTypeSchemas/ToDoListCountOutputTypeArgsSchema.ts
import { z } from "zod";
var ToDoListCountOutputTypeArgsSchema = z.object({
  select: z.lazy(() => ToDoListCountOutputTypeSelectSchema).nullish()
}).strict();
var ToDoListCountOutputTypeArgsSchema_default = ToDoListCountOutputTypeSelectSchema;

export {
  ToDoListCountOutputTypeArgsSchema,
  ToDoListCountOutputTypeArgsSchema_default
};
//# sourceMappingURL=chunk-MLGRIOAU.js.map