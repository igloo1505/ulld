import {
  ToDoUncheckedUpdateManyWithoutAssociatedNotesInputSchema
} from "./chunk-ZMAMVY2U.js";
import {
  ToDoScalarWhereInputSchema
} from "./chunk-QSWRLQUO.js";
import {
  ToDoUpdateManyMutationInputSchema
} from "./chunk-MYRHKTSP.js";

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
//# sourceMappingURL=chunk-WESXTA5K.js.map