import {
  BibEntryUncheckedUpdateManyWithoutSubjectsInputSchema
} from "./chunk-6TYMVNYZ.js";
import {
  BibEntryScalarWhereInputSchema
} from "./chunk-O3SGS2YY.js";
import {
  BibEntryUpdateManyMutationInputSchema
} from "./chunk-GVOXETSB.js";

// src/database/inputTypeSchemas/BibEntryUpdateManyWithWhereWithoutSubjectsInputSchema.ts
import { z } from "zod";
var BibEntryUpdateManyWithWhereWithoutSubjectsInputSchema = z.object({
  where: z.lazy(() => BibEntryScalarWhereInputSchema),
  data: z.union([z.lazy(() => BibEntryUpdateManyMutationInputSchema), z.lazy(() => BibEntryUncheckedUpdateManyWithoutSubjectsInputSchema)])
}).strict();
var BibEntryUpdateManyWithWhereWithoutSubjectsInputSchema_default = BibEntryUpdateManyWithWhereWithoutSubjectsInputSchema;

export {
  BibEntryUpdateManyWithWhereWithoutSubjectsInputSchema,
  BibEntryUpdateManyWithWhereWithoutSubjectsInputSchema_default
};
//# sourceMappingURL=chunk-OG4T6OHI.js.map