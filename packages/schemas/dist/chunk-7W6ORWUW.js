import {
  SubjectUncheckedUpdateManyWithoutToDoInputSchema
} from "./chunk-3566KLDP.js";
import {
  SubjectScalarWhereInputSchema
} from "./chunk-33GSTGNH.js";
import {
  SubjectUpdateManyMutationInputSchema
} from "./chunk-4BUUQXQR.js";

// src/database/inputTypeSchemas/SubjectUpdateManyWithWhereWithoutToDoInputSchema.ts
import { z } from "zod";
var SubjectUpdateManyWithWhereWithoutToDoInputSchema = z.object({
  where: z.lazy(() => SubjectScalarWhereInputSchema),
  data: z.union([z.lazy(() => SubjectUpdateManyMutationInputSchema), z.lazy(() => SubjectUncheckedUpdateManyWithoutToDoInputSchema)])
}).strict();
var SubjectUpdateManyWithWhereWithoutToDoInputSchema_default = SubjectUpdateManyWithWhereWithoutToDoInputSchema;

export {
  SubjectUpdateManyWithWhereWithoutToDoInputSchema,
  SubjectUpdateManyWithWhereWithoutToDoInputSchema_default
};
//# sourceMappingURL=chunk-7W6ORWUW.js.map