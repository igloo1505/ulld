import {
  ToDoUncheckedUpdateManyWithoutTopicsInputSchema
} from "./chunk-RJHIW4JC.js";
import {
  ToDoScalarWhereInputSchema
} from "./chunk-E5BSRQUM.js";
import {
  ToDoUpdateManyMutationInputSchema
} from "./chunk-5JCH7EHC.js";

// src/database/inputTypeSchemas/ToDoUpdateManyWithWhereWithoutTopicsInputSchema.ts
import { z } from "zod";
var ToDoUpdateManyWithWhereWithoutTopicsInputSchema = z.object({
  where: z.lazy(() => ToDoScalarWhereInputSchema),
  data: z.union([z.lazy(() => ToDoUpdateManyMutationInputSchema), z.lazy(() => ToDoUncheckedUpdateManyWithoutTopicsInputSchema)])
}).strict();
var ToDoUpdateManyWithWhereWithoutTopicsInputSchema_default = ToDoUpdateManyWithWhereWithoutTopicsInputSchema;

export {
  ToDoUpdateManyWithWhereWithoutTopicsInputSchema,
  ToDoUpdateManyWithWhereWithoutTopicsInputSchema_default
};
//# sourceMappingURL=chunk-C2SE2QIR.js.map