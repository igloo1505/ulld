import {
  SubjectUncheckedUpdateManyWithoutMdxNotesInputSchema
} from "./chunk-HNJIA3GM.js";
import {
  SubjectScalarWhereInputSchema
} from "./chunk-33GSTGNH.js";
import {
  SubjectUpdateManyMutationInputSchema
} from "./chunk-4BUUQXQR.js";

// src/database/inputTypeSchemas/SubjectUpdateManyWithWhereWithoutMdxNotesInputSchema.ts
import { z } from "zod";
var SubjectUpdateManyWithWhereWithoutMdxNotesInputSchema = z.object({
  where: z.lazy(() => SubjectScalarWhereInputSchema),
  data: z.union([z.lazy(() => SubjectUpdateManyMutationInputSchema), z.lazy(() => SubjectUncheckedUpdateManyWithoutMdxNotesInputSchema)])
}).strict();
var SubjectUpdateManyWithWhereWithoutMdxNotesInputSchema_default = SubjectUpdateManyWithWhereWithoutMdxNotesInputSchema;

export {
  SubjectUpdateManyWithWhereWithoutMdxNotesInputSchema,
  SubjectUpdateManyWithWhereWithoutMdxNotesInputSchema_default
};
//# sourceMappingURL=chunk-HUUYKGPE.js.map