import {
  BibEntryUncheckedUpdateManyWithoutMdxNotesInputSchema
} from "./chunk-WKTVZTWH.js";
import {
  BibEntryScalarWhereInputSchema
} from "./chunk-5VVW6VYN.js";
import {
  BibEntryUpdateManyMutationInputSchema
} from "./chunk-ZZJQ2CJ5.js";

// src/database/inputTypeSchemas/BibEntryUpdateManyWithWhereWithoutMdxNotesInputSchema.ts
import { z } from "zod";
var BibEntryUpdateManyWithWhereWithoutMdxNotesInputSchema = z.object({
  where: z.lazy(() => BibEntryScalarWhereInputSchema),
  data: z.union([z.lazy(() => BibEntryUpdateManyMutationInputSchema), z.lazy(() => BibEntryUncheckedUpdateManyWithoutMdxNotesInputSchema)])
}).strict();
var BibEntryUpdateManyWithWhereWithoutMdxNotesInputSchema_default = BibEntryUpdateManyWithWhereWithoutMdxNotesInputSchema;

export {
  BibEntryUpdateManyWithWhereWithoutMdxNotesInputSchema,
  BibEntryUpdateManyWithWhereWithoutMdxNotesInputSchema_default
};
//# sourceMappingURL=chunk-WRKJINZC.js.map