import {
  ToDoListUncheckedUpdateManyWithoutTagsInputSchema
} from "./chunk-A4TMWGDL.js";
import {
  ToDoListScalarWhereInputSchema
} from "./chunk-ESLLAAZ2.js";
import {
  ToDoListUpdateManyMutationInputSchema
} from "./chunk-7ZXOI24M.js";

// src/database/inputTypeSchemas/ToDoListUpdateManyWithWhereWithoutTagsInputSchema.ts
import { z } from "zod";
var ToDoListUpdateManyWithWhereWithoutTagsInputSchema = z.object({
  where: z.lazy(() => ToDoListScalarWhereInputSchema),
  data: z.union([z.lazy(() => ToDoListUpdateManyMutationInputSchema), z.lazy(() => ToDoListUncheckedUpdateManyWithoutTagsInputSchema)])
}).strict();
var ToDoListUpdateManyWithWhereWithoutTagsInputSchema_default = ToDoListUpdateManyWithWhereWithoutTagsInputSchema;

export {
  ToDoListUpdateManyWithWhereWithoutTagsInputSchema,
  ToDoListUpdateManyWithWhereWithoutTagsInputSchema_default
};
//# sourceMappingURL=chunk-PZZTWDVE.js.map