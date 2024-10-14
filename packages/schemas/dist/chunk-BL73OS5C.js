import {
  BibEntryUncheckedUpdateManyWithoutTopicsInputSchema
} from "./chunk-EJ3Q2FH4.js";
import {
  BibEntryScalarWhereInputSchema
} from "./chunk-5VVW6VYN.js";
import {
  BibEntryUpdateManyMutationInputSchema
} from "./chunk-ZZJQ2CJ5.js";

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
//# sourceMappingURL=chunk-BL73OS5C.js.map