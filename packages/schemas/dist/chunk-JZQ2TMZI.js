import {
  ToDoUncheckedUpdateManyWithoutParentInputSchema
} from "./chunk-2O2334IT.js";
import {
  ToDoScalarWhereInputSchema
} from "./chunk-QSWRLQUO.js";
import {
  ToDoUpdateManyMutationInputSchema
} from "./chunk-MYRHKTSP.js";

// src/database/inputTypeSchemas/ToDoUpdateManyWithWhereWithoutParentInputSchema.ts
import { z } from "zod";
var ToDoUpdateManyWithWhereWithoutParentInputSchema = z.object({
  where: z.lazy(() => ToDoScalarWhereInputSchema),
  data: z.union([z.lazy(() => ToDoUpdateManyMutationInputSchema), z.lazy(() => ToDoUncheckedUpdateManyWithoutParentInputSchema)])
}).strict();
var ToDoUpdateManyWithWhereWithoutParentInputSchema_default = ToDoUpdateManyWithWhereWithoutParentInputSchema;

export {
  ToDoUpdateManyWithWhereWithoutParentInputSchema,
  ToDoUpdateManyWithWhereWithoutParentInputSchema_default
};
//# sourceMappingURL=chunk-JZQ2TMZI.js.map