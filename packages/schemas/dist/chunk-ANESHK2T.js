import {
  ToDoUncheckedUpdateManyWithoutSubjectsInputSchema
} from "./chunk-RHGBXSG2.js";
import {
  ToDoScalarWhereInputSchema
} from "./chunk-QSWRLQUO.js";
import {
  ToDoUpdateManyMutationInputSchema
} from "./chunk-MYRHKTSP.js";

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
//# sourceMappingURL=chunk-ANESHK2T.js.map