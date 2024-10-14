import {
  ToDoUncheckedUpdateManyWithoutTagsInputSchema
} from "./chunk-HDLMQA65.js";
import {
  ToDoScalarWhereInputSchema
} from "./chunk-QSWRLQUO.js";
import {
  ToDoUpdateManyMutationInputSchema
} from "./chunk-MYRHKTSP.js";

// src/database/inputTypeSchemas/ToDoUpdateManyWithWhereWithoutTagsInputSchema.ts
import { z } from "zod";
var ToDoUpdateManyWithWhereWithoutTagsInputSchema = z.object({
  where: z.lazy(() => ToDoScalarWhereInputSchema),
  data: z.union([z.lazy(() => ToDoUpdateManyMutationInputSchema), z.lazy(() => ToDoUncheckedUpdateManyWithoutTagsInputSchema)])
}).strict();
var ToDoUpdateManyWithWhereWithoutTagsInputSchema_default = ToDoUpdateManyWithWhereWithoutTagsInputSchema;

export {
  ToDoUpdateManyWithWhereWithoutTagsInputSchema,
  ToDoUpdateManyWithWhereWithoutTagsInputSchema_default
};
//# sourceMappingURL=chunk-NDOBXTRP.js.map