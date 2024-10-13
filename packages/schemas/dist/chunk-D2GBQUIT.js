import {
  SubjectUncheckedUpdateManyWithoutEquationsInputSchema
} from "./chunk-GZBCSW7V.js";
import {
  SubjectScalarWhereInputSchema
} from "./chunk-33GSTGNH.js";
import {
  SubjectUpdateManyMutationInputSchema
} from "./chunk-4BUUQXQR.js";

// src/database/inputTypeSchemas/SubjectUpdateManyWithWhereWithoutEquationsInputSchema.ts
import { z } from "zod";
var SubjectUpdateManyWithWhereWithoutEquationsInputSchema = z.object({
  where: z.lazy(() => SubjectScalarWhereInputSchema),
  data: z.union([z.lazy(() => SubjectUpdateManyMutationInputSchema), z.lazy(() => SubjectUncheckedUpdateManyWithoutEquationsInputSchema)])
}).strict();
var SubjectUpdateManyWithWhereWithoutEquationsInputSchema_default = SubjectUpdateManyWithWhereWithoutEquationsInputSchema;

export {
  SubjectUpdateManyWithWhereWithoutEquationsInputSchema,
  SubjectUpdateManyWithWhereWithoutEquationsInputSchema_default
};
//# sourceMappingURL=chunk-D2GBQUIT.js.map