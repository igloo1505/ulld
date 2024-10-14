import {
  ToDoListUncheckedUpdateManyWithoutTagsInputSchema
} from "./chunk-EWW7N4QG.js";
import {
  ToDoListScalarWhereInputSchema
} from "./chunk-Y32CQS2U.js";
import {
  ToDoListUpdateManyMutationInputSchema
} from "./chunk-WWKNDWP7.js";

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
//# sourceMappingURL=chunk-ASVMM5RN.js.map