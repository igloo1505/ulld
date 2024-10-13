import {
  SubjectUncheckedUpdateManyWithoutTodoListInputSchema
} from "./chunk-RTOLKUNZ.js";
import {
  SubjectScalarWhereInputSchema
} from "./chunk-33GSTGNH.js";
import {
  SubjectUpdateManyMutationInputSchema
} from "./chunk-4BUUQXQR.js";

// src/database/inputTypeSchemas/SubjectUpdateManyWithWhereWithoutTodoListInputSchema.ts
import { z } from "zod";
var SubjectUpdateManyWithWhereWithoutTodoListInputSchema = z.object({
  where: z.lazy(() => SubjectScalarWhereInputSchema),
  data: z.union([z.lazy(() => SubjectUpdateManyMutationInputSchema), z.lazy(() => SubjectUncheckedUpdateManyWithoutTodoListInputSchema)])
}).strict();
var SubjectUpdateManyWithWhereWithoutTodoListInputSchema_default = SubjectUpdateManyWithWhereWithoutTodoListInputSchema;

export {
  SubjectUpdateManyWithWhereWithoutTodoListInputSchema,
  SubjectUpdateManyWithWhereWithoutTodoListInputSchema_default
};
//# sourceMappingURL=chunk-HMXVMAGS.js.map