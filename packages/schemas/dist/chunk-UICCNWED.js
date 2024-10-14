import {
  SubjectUncheckedUpdateManyWithoutBibEntriesInputSchema
} from "./chunk-HOATHKPE.js";
import {
  SubjectScalarWhereInputSchema
} from "./chunk-I3375QEJ.js";
import {
  SubjectUpdateManyMutationInputSchema
} from "./chunk-V3R3XKVB.js";

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
//# sourceMappingURL=chunk-UICCNWED.js.map