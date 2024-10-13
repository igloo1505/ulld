import {
  ToDoListUncheckedUpdateManyWithoutSubjectsInputSchema
} from "./chunk-A6AOOOWZ.js";
import {
  ToDoListScalarWhereInputSchema
} from "./chunk-ESLLAAZ2.js";
import {
  ToDoListUpdateManyMutationInputSchema
} from "./chunk-7ZXOI24M.js";

// src/database/inputTypeSchemas/ToDoListUpdateManyWithWhereWithoutSubjectsInputSchema.ts
import { z } from "zod";
var ToDoListUpdateManyWithWhereWithoutSubjectsInputSchema = z.object({
  where: z.lazy(() => ToDoListScalarWhereInputSchema),
  data: z.union([z.lazy(() => ToDoListUpdateManyMutationInputSchema), z.lazy(() => ToDoListUncheckedUpdateManyWithoutSubjectsInputSchema)])
}).strict();
var ToDoListUpdateManyWithWhereWithoutSubjectsInputSchema_default = ToDoListUpdateManyWithWhereWithoutSubjectsInputSchema;

export {
  ToDoListUpdateManyWithWhereWithoutSubjectsInputSchema,
  ToDoListUpdateManyWithWhereWithoutSubjectsInputSchema_default
};
//# sourceMappingURL=chunk-GJAZRLBP.js.map