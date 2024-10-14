import {
  BibEntryUncheckedUpdateManyWithoutSubjectsInputSchema
} from "./chunk-YL74L26V.js";
import {
  BibEntryScalarWhereInputSchema
} from "./chunk-5VVW6VYN.js";
import {
  BibEntryUpdateManyMutationInputSchema
} from "./chunk-ZZJQ2CJ5.js";

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
//# sourceMappingURL=chunk-MTMZUQDO.js.map