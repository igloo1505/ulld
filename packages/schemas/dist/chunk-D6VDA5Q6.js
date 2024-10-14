import {
  BibEntryUncheckedUpdateManyWithoutIpynbNotesInputSchema
} from "./chunk-3T3AYGWT.js";
import {
  BibEntryScalarWhereInputSchema
} from "./chunk-5VVW6VYN.js";
import {
  BibEntryUpdateManyMutationInputSchema
} from "./chunk-ZZJQ2CJ5.js";

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
//# sourceMappingURL=chunk-D6VDA5Q6.js.map