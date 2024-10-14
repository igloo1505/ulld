import {
  SubjectUncheckedUpdateManyWithoutQaPairInputSchema
} from "./chunk-4JKR7U4P.js";
import {
  SubjectScalarWhereInputSchema
} from "./chunk-I3375QEJ.js";
import {
  SubjectUpdateManyMutationInputSchema
} from "./chunk-V3R3XKVB.js";

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
//# sourceMappingURL=chunk-47EGJ2AQ.js.map