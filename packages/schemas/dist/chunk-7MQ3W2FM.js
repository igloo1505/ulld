import {
  BibEntryUncheckedUpdateManyWithoutTagsInputSchema
} from "./chunk-SD5SGY2D.js";
import {
  BibEntryScalarWhereInputSchema
} from "./chunk-O3SGS2YY.js";
import {
  BibEntryUpdateManyMutationInputSchema
} from "./chunk-GVOXETSB.js";

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
//# sourceMappingURL=chunk-7MQ3W2FM.js.map