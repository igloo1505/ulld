import {
  ToDoUncheckedUpdateManyWithoutToDoListInputSchema
} from "./chunk-QCFOE4QS.js";
import {
  ToDoScalarWhereInputSchema
} from "./chunk-E5BSRQUM.js";
import {
  ToDoUpdateManyMutationInputSchema
} from "./chunk-5JCH7EHC.js";

// src/database/inputTypeSchemas/ToDoUpdateManyWithWhereWithoutToDoListInputSchema.ts
import { z } from "zod";
var ToDoUpdateManyWithWhereWithoutToDoListInputSchema = z.object({
  where: z.lazy(() => ToDoScalarWhereInputSchema),
  data: z.union([z.lazy(() => ToDoUpdateManyMutationInputSchema), z.lazy(() => ToDoUncheckedUpdateManyWithoutToDoListInputSchema)])
}).strict();
var ToDoUpdateManyWithWhereWithoutToDoListInputSchema_default = ToDoUpdateManyWithWhereWithoutToDoListInputSchema;

export {
  ToDoUpdateManyWithWhereWithoutToDoListInputSchema,
  ToDoUpdateManyWithWhereWithoutToDoListInputSchema_default
};
//# sourceMappingURL=chunk-JBBVSAPJ.js.map