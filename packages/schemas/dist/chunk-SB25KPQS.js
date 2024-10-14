import {
  SubjectUncheckedUpdateManyWithoutEquationsInputSchema
} from "./chunk-RCRCT2AG.js";
import {
  SubjectScalarWhereInputSchema
} from "./chunk-I3375QEJ.js";
import {
  SubjectUpdateManyMutationInputSchema
} from "./chunk-V3R3XKVB.js";

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
//# sourceMappingURL=chunk-SB25KPQS.js.map