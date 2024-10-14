import {
  SubjectUncheckedUpdateManyWithoutToDoInputSchema
} from "./chunk-HVKAOCQX.js";
import {
  SubjectScalarWhereInputSchema
} from "./chunk-I3375QEJ.js";
import {
  SubjectUpdateManyMutationInputSchema
} from "./chunk-V3R3XKVB.js";

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
//# sourceMappingURL=chunk-IPELJRUX.js.map