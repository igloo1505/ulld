import {
  SubjectUncheckedUpdateManyWithoutIpynbNotesInputSchema
} from "./chunk-XYLKBXZJ.js";
import {
  SubjectScalarWhereInputSchema
} from "./chunk-33GSTGNH.js";
import {
  SubjectUpdateManyMutationInputSchema
} from "./chunk-4BUUQXQR.js";

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
//# sourceMappingURL=chunk-BE6PADTB.js.map