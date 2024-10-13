import {
  SubjectUncheckedUpdateManyWithoutKanbanInputSchema
} from "./chunk-MOGP7HDT.js";
import {
  SubjectScalarWhereInputSchema
} from "./chunk-33GSTGNH.js";
import {
  SubjectUpdateManyMutationInputSchema
} from "./chunk-4BUUQXQR.js";

// src/database/inputTypeSchemas/SubjectUpdateManyWithWhereWithoutKanbanInputSchema.ts
import { z } from "zod";
var SubjectUpdateManyWithWhereWithoutKanbanInputSchema = z.object({
  where: z.lazy(() => SubjectScalarWhereInputSchema),
  data: z.union([z.lazy(() => SubjectUpdateManyMutationInputSchema), z.lazy(() => SubjectUncheckedUpdateManyWithoutKanbanInputSchema)])
}).strict();
var SubjectUpdateManyWithWhereWithoutKanbanInputSchema_default = SubjectUpdateManyWithWhereWithoutKanbanInputSchema;

export {
  SubjectUpdateManyWithWhereWithoutKanbanInputSchema,
  SubjectUpdateManyWithWhereWithoutKanbanInputSchema_default
};
//# sourceMappingURL=chunk-2LFSKIWC.js.map