import {
  BibEntryUncheckedUpdateManyWithoutReadingListInputSchema
} from "./chunk-6ZB4OSXG.js";
import {
  BibEntryScalarWhereInputSchema
} from "./chunk-O3SGS2YY.js";
import {
  BibEntryUpdateManyMutationInputSchema
} from "./chunk-GVOXETSB.js";

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
//# sourceMappingURL=chunk-TZHYYERT.js.map