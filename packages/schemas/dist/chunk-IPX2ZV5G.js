import {
  ToDoListCountOutputTypeSelectSchema
} from "./chunk-GU3UKTWB.js";

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
//# sourceMappingURL=chunk-IPX2ZV5G.js.map