import {
  BibEntryUncheckedUpdateManyWithoutTopicsInputSchema
} from "./chunk-P7AVFHOE.js";
import {
  BibEntryScalarWhereInputSchema
} from "./chunk-O3SGS2YY.js";
import {
  BibEntryUpdateManyMutationInputSchema
} from "./chunk-GVOXETSB.js";

// src/database/inputTypeSchemas/BibEntryUpdateManyWithWhereWithoutTopicsInputSchema.ts
import { z } from "zod";
var BibEntryUpdateManyWithWhereWithoutTopicsInputSchema = z.object({
  where: z.lazy(() => BibEntryScalarWhereInputSchema),
  data: z.union([z.lazy(() => BibEntryUpdateManyMutationInputSchema), z.lazy(() => BibEntryUncheckedUpdateManyWithoutTopicsInputSchema)])
}).strict();
var BibEntryUpdateManyWithWhereWithoutTopicsInputSchema_default = BibEntryUpdateManyWithWhereWithoutTopicsInputSchema;

export {
  BibEntryUpdateManyWithWhereWithoutTopicsInputSchema,
  BibEntryUpdateManyWithWhereWithoutTopicsInputSchema_default
};
//# sourceMappingURL=chunk-PY5GOQAC.js.map