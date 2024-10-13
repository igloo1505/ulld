import {
  ToDoUncheckedUpdateManyWithoutTagsInputSchema
} from "./chunk-TEDEWF5Q.js";
import {
  ToDoScalarWhereInputSchema
} from "./chunk-E5BSRQUM.js";
import {
  ToDoUpdateManyMutationInputSchema
} from "./chunk-5JCH7EHC.js";

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
//# sourceMappingURL=chunk-36SM5WQL.js.map