import {
  BibEntryUncheckedUpdateManyWithoutCitationGroupsInputSchema
} from "./chunk-MJXVZ5CT.js";
import {
  BibEntryScalarWhereInputSchema
} from "./chunk-O3SGS2YY.js";
import {
  BibEntryUpdateManyMutationInputSchema
} from "./chunk-GVOXETSB.js";

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
//# sourceMappingURL=chunk-TAXHBPZW.js.map