import {
  ToDoCountOutputTypeSelectSchema
} from "./chunk-DPNQU4G5.js";

// src/database/outputTypeSchemas/ToDoCountOutputTypeArgsSchema.ts
import { z } from "zod";
var ToDoCountOutputTypeArgsSchema = z.object({
  select: z.lazy(() => ToDoCountOutputTypeSelectSchema).nullish()
}).strict();
var ToDoCountOutputTypeArgsSchema_default = ToDoCountOutputTypeSelectSchema;

export {
  ToDoCountOutputTypeArgsSchema,
  ToDoCountOutputTypeArgsSchema_default
};
//# sourceMappingURL=chunk-3TXDSUBT.js.map