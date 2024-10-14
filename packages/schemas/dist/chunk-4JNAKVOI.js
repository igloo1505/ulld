import {
  BibEntryUncheckedUpdateManyWithoutCitationGroupsInputSchema
} from "./chunk-O2NTE4AA.js";
import {
  BibEntryScalarWhereInputSchema
} from "./chunk-5VVW6VYN.js";
import {
  BibEntryUpdateManyMutationInputSchema
} from "./chunk-ZZJQ2CJ5.js";

// src/database/inputTypeSchemas/BibEntryUpdateManyWithWhereWithoutCitationGroupsInputSchema.ts
import { z } from "zod";
var BibEntryUpdateManyWithWhereWithoutCitationGroupsInputSchema = z.object({
  where: z.lazy(() => BibEntryScalarWhereInputSchema),
  data: z.union([z.lazy(() => BibEntryUpdateManyMutationInputSchema), z.lazy(() => BibEntryUncheckedUpdateManyWithoutCitationGroupsInputSchema)])
}).strict();
var BibEntryUpdateManyWithWhereWithoutCitationGroupsInputSchema_default = BibEntryUpdateManyWithWhereWithoutCitationGroupsInputSchema;

export {
  BibEntryUpdateManyWithWhereWithoutCitationGroupsInputSchema,
  BibEntryUpdateManyWithWhereWithoutCitationGroupsInputSchema_default
};
//# sourceMappingURL=chunk-4JNAKVOI.js.map