import {
  ToDoListUncheckedUpdateManyWithoutSubjectsInputSchema
} from "./chunk-DQTJQHUR.js";
import {
  ToDoListScalarWhereInputSchema
} from "./chunk-Y32CQS2U.js";
import {
  ToDoListUpdateManyMutationInputSchema
} from "./chunk-WWKNDWP7.js";

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
//# sourceMappingURL=chunk-C2TI6CN3.js.map