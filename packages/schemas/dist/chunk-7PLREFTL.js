import {
  SubjectUncheckedUpdateManyWithoutMdxNotesInputSchema
} from "./chunk-ZV5MNX67.js";
import {
  SubjectScalarWhereInputSchema
} from "./chunk-I3375QEJ.js";
import {
  SubjectUpdateManyMutationInputSchema
} from "./chunk-V3R3XKVB.js";

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
//# sourceMappingURL=chunk-7PLREFTL.js.map