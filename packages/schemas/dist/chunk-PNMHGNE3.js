import {
  ToDoUncheckedUpdateManyWithoutParentInputSchema
} from "./chunk-ICT2J3NR.js";
import {
  ToDoScalarWhereInputSchema
} from "./chunk-E5BSRQUM.js";
import {
  ToDoUpdateManyMutationInputSchema
} from "./chunk-5JCH7EHC.js";

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
//# sourceMappingURL=chunk-PNMHGNE3.js.map