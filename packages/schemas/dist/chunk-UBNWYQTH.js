import {
  BibEntryUncheckedUpdateManyWithoutTagsInputSchema
} from "./chunk-J7UYYT3W.js";
import {
  BibEntryScalarWhereInputSchema
} from "./chunk-5VVW6VYN.js";
import {
  BibEntryUpdateManyMutationInputSchema
} from "./chunk-ZZJQ2CJ5.js";

// src/database/inputTypeSchemas/BibEntryUpdateManyWithWhereWithoutTagsInputSchema.ts
import { z } from "zod";
var BibEntryUpdateManyWithWhereWithoutTagsInputSchema = z.object({
  where: z.lazy(() => BibEntryScalarWhereInputSchema),
  data: z.union([z.lazy(() => BibEntryUpdateManyMutationInputSchema), z.lazy(() => BibEntryUncheckedUpdateManyWithoutTagsInputSchema)])
}).strict();
var BibEntryUpdateManyWithWhereWithoutTagsInputSchema_default = BibEntryUpdateManyWithWhereWithoutTagsInputSchema;

export {
  BibEntryUpdateManyWithWhereWithoutTagsInputSchema,
  BibEntryUpdateManyWithWhereWithoutTagsInputSchema_default
};
//# sourceMappingURL=chunk-UBNWYQTH.js.map