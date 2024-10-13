import {
  SubjectUncheckedUpdateManyWithoutBibEntriesInputSchema
} from "./chunk-UTOJZ36E.js";
import {
  SubjectScalarWhereInputSchema
} from "./chunk-33GSTGNH.js";
import {
  SubjectUpdateManyMutationInputSchema
} from "./chunk-4BUUQXQR.js";

// src/database/inputTypeSchemas/SubjectUpdateManyWithWhereWithoutBibEntriesInputSchema.ts
import { z } from "zod";
var SubjectUpdateManyWithWhereWithoutBibEntriesInputSchema = z.object({
  where: z.lazy(() => SubjectScalarWhereInputSchema),
  data: z.union([z.lazy(() => SubjectUpdateManyMutationInputSchema), z.lazy(() => SubjectUncheckedUpdateManyWithoutBibEntriesInputSchema)])
}).strict();
var SubjectUpdateManyWithWhereWithoutBibEntriesInputSchema_default = SubjectUpdateManyWithWhereWithoutBibEntriesInputSchema;

export {
  SubjectUpdateManyWithWhereWithoutBibEntriesInputSchema,
  SubjectUpdateManyWithWhereWithoutBibEntriesInputSchema_default
};
//# sourceMappingURL=chunk-IB5CH3FV.js.map