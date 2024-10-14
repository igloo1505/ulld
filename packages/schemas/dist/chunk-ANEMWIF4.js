import {
  BibEntryUncheckedUpdateManyWithoutReadingListInputSchema
} from "./chunk-OSQSO7EO.js";
import {
  BibEntryScalarWhereInputSchema
} from "./chunk-5VVW6VYN.js";
import {
  BibEntryUpdateManyMutationInputSchema
} from "./chunk-ZZJQ2CJ5.js";

// src/database/inputTypeSchemas/BibEntryUpdateManyWithWhereWithoutReadingListInputSchema.ts
import { z } from "zod";
var BibEntryUpdateManyWithWhereWithoutReadingListInputSchema = z.object({
  where: z.lazy(() => BibEntryScalarWhereInputSchema),
  data: z.union([z.lazy(() => BibEntryUpdateManyMutationInputSchema), z.lazy(() => BibEntryUncheckedUpdateManyWithoutReadingListInputSchema)])
}).strict();
var BibEntryUpdateManyWithWhereWithoutReadingListInputSchema_default = BibEntryUpdateManyWithWhereWithoutReadingListInputSchema;

export {
  BibEntryUpdateManyWithWhereWithoutReadingListInputSchema,
  BibEntryUpdateManyWithWhereWithoutReadingListInputSchema_default
};
//# sourceMappingURL=chunk-ANEMWIF4.js.map