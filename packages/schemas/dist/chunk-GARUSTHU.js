import {
  SubjectUncheckedUpdateManyWithoutIpynbNotesInputSchema
} from "./chunk-BJTG2YVO.js";
import {
  SubjectScalarWhereInputSchema
} from "./chunk-I3375QEJ.js";
import {
  SubjectUpdateManyMutationInputSchema
} from "./chunk-V3R3XKVB.js";

// src/database/inputTypeSchemas/SubjectUpdateManyWithWhereWithoutIpynbNotesInputSchema.ts
import { z } from "zod";
var SubjectUpdateManyWithWhereWithoutIpynbNotesInputSchema = z.object({
  where: z.lazy(() => SubjectScalarWhereInputSchema),
  data: z.union([z.lazy(() => SubjectUpdateManyMutationInputSchema), z.lazy(() => SubjectUncheckedUpdateManyWithoutIpynbNotesInputSchema)])
}).strict();
var SubjectUpdateManyWithWhereWithoutIpynbNotesInputSchema_default = SubjectUpdateManyWithWhereWithoutIpynbNotesInputSchema;

export {
  SubjectUpdateManyWithWhereWithoutIpynbNotesInputSchema,
  SubjectUpdateManyWithWhereWithoutIpynbNotesInputSchema_default
};
//# sourceMappingURL=chunk-GARUSTHU.js.map