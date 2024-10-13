import {
  SubjectUncheckedUpdateManyWithoutQaPairInputSchema
} from "./chunk-NSRDGUI2.js";
import {
  SubjectScalarWhereInputSchema
} from "./chunk-33GSTGNH.js";
import {
  SubjectUpdateManyMutationInputSchema
} from "./chunk-4BUUQXQR.js";

// src/database/inputTypeSchemas/SubjectUpdateManyWithWhereWithoutQaPairInputSchema.ts
import { z } from "zod";
var SubjectUpdateManyWithWhereWithoutQaPairInputSchema = z.object({
  where: z.lazy(() => SubjectScalarWhereInputSchema),
  data: z.union([z.lazy(() => SubjectUpdateManyMutationInputSchema), z.lazy(() => SubjectUncheckedUpdateManyWithoutQaPairInputSchema)])
}).strict();
var SubjectUpdateManyWithWhereWithoutQaPairInputSchema_default = SubjectUpdateManyWithWhereWithoutQaPairInputSchema;

export {
  SubjectUpdateManyWithWhereWithoutQaPairInputSchema,
  SubjectUpdateManyWithWhereWithoutQaPairInputSchema_default
};
//# sourceMappingURL=chunk-BXNDB4FN.js.map