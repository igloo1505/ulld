import {
  ToDoUncheckedUpdateManyWithoutSubjectsInputSchema
} from "./chunk-N2ZGUUDZ.js";
import {
  ToDoScalarWhereInputSchema
} from "./chunk-E5BSRQUM.js";
import {
  ToDoUpdateManyMutationInputSchema
} from "./chunk-5JCH7EHC.js";

// src/database/inputTypeSchemas/ToDoUpdateManyWithWhereWithoutSubjectsInputSchema.ts
import { z } from "zod";
var ToDoUpdateManyWithWhereWithoutSubjectsInputSchema = z.object({
  where: z.lazy(() => ToDoScalarWhereInputSchema),
  data: z.union([z.lazy(() => ToDoUpdateManyMutationInputSchema), z.lazy(() => ToDoUncheckedUpdateManyWithoutSubjectsInputSchema)])
}).strict();
var ToDoUpdateManyWithWhereWithoutSubjectsInputSchema_default = ToDoUpdateManyWithWhereWithoutSubjectsInputSchema;

export {
  ToDoUpdateManyWithWhereWithoutSubjectsInputSchema,
  ToDoUpdateManyWithWhereWithoutSubjectsInputSchema_default
};
//# sourceMappingURL=chunk-34PP7INZ.js.map