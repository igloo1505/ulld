import {
  ToDoUncheckedUpdateManyWithoutToDoListInputSchema
} from "./chunk-T4C24MMW.js";
import {
  ToDoScalarWhereInputSchema
} from "./chunk-QSWRLQUO.js";
import {
  ToDoUpdateManyMutationInputSchema
} from "./chunk-MYRHKTSP.js";

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
//# sourceMappingURL=chunk-2SEJJJCS.js.map