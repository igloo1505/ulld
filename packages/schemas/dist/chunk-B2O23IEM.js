import {
  SubjectUncheckedUpdateManyWithoutKanbanInputSchema
} from "./chunk-WLC3IEOJ.js";
import {
  SubjectScalarWhereInputSchema
} from "./chunk-I3375QEJ.js";
import {
  SubjectUpdateManyMutationInputSchema
} from "./chunk-V3R3XKVB.js";

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
//# sourceMappingURL=chunk-B2O23IEM.js.map