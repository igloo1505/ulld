import {
  SubjectUncheckedUpdateManyWithoutTodoListInputSchema
} from "./chunk-Q3GDJHPI.js";
import {
  SubjectScalarWhereInputSchema
} from "./chunk-I3375QEJ.js";
import {
  SubjectUpdateManyMutationInputSchema
} from "./chunk-V3R3XKVB.js";

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
//# sourceMappingURL=chunk-4CKKLLQE.js.map