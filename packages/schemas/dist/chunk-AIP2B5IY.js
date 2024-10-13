import {
  BibEntryUncheckedUpdateManyWithoutIpynbNotesInputSchema
} from "./chunk-SX3ECTJQ.js";
import {
  BibEntryScalarWhereInputSchema
} from "./chunk-O3SGS2YY.js";
import {
  BibEntryUpdateManyMutationInputSchema
} from "./chunk-GVOXETSB.js";

// src/database/inputTypeSchemas/BibEntryUpdateManyWithWhereWithoutIpynbNotesInputSchema.ts
import { z } from "zod";
var BibEntryUpdateManyWithWhereWithoutIpynbNotesInputSchema = z.object({
  where: z.lazy(() => BibEntryScalarWhereInputSchema),
  data: z.union([z.lazy(() => BibEntryUpdateManyMutationInputSchema), z.lazy(() => BibEntryUncheckedUpdateManyWithoutIpynbNotesInputSchema)])
}).strict();
var BibEntryUpdateManyWithWhereWithoutIpynbNotesInputSchema_default = BibEntryUpdateManyWithWhereWithoutIpynbNotesInputSchema;

export {
  BibEntryUpdateManyWithWhereWithoutIpynbNotesInputSchema,
  BibEntryUpdateManyWithWhereWithoutIpynbNotesInputSchema_default
};
//# sourceMappingURL=chunk-AIP2B5IY.js.map