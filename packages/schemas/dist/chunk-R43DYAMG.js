import {
  BibEntryUncheckedUpdateManyWithoutMdxNotesInputSchema
} from "./chunk-Y4CF65FX.js";
import {
  BibEntryScalarWhereInputSchema
} from "./chunk-O3SGS2YY.js";
import {
  BibEntryUpdateManyMutationInputSchema
} from "./chunk-GVOXETSB.js";

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
//# sourceMappingURL=chunk-R43DYAMG.js.map