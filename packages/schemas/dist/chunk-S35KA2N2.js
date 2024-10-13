import {
  ToDoUncheckedUpdateManyWithoutAssociatedNotesInputSchema
} from "./chunk-PTWGMC3X.js";
import {
  ToDoScalarWhereInputSchema
} from "./chunk-E5BSRQUM.js";
import {
  ToDoUpdateManyMutationInputSchema
} from "./chunk-5JCH7EHC.js";

// src/database/inputTypeSchemas/ToDoUpdateManyWithWhereWithoutAssociatedNotesInputSchema.ts
import { z } from "zod";
var ToDoUpdateManyWithWhereWithoutAssociatedNotesInputSchema = z.object({
  where: z.lazy(() => ToDoScalarWhereInputSchema),
  data: z.union([z.lazy(() => ToDoUpdateManyMutationInputSchema), z.lazy(() => ToDoUncheckedUpdateManyWithoutAssociatedNotesInputSchema)])
}).strict();
var ToDoUpdateManyWithWhereWithoutAssociatedNotesInputSchema_default = ToDoUpdateManyWithWhereWithoutAssociatedNotesInputSchema;

export {
  ToDoUpdateManyWithWhereWithoutAssociatedNotesInputSchema,
  ToDoUpdateManyWithWhereWithoutAssociatedNotesInputSchema_default
};
//# sourceMappingURL=chunk-S35KA2N2.js.map