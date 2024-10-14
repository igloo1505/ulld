import {
  BibEntryUncheckedCreateNestedManyWithoutCitationGroupsInputSchema
} from "./chunk-PXLCGYR7.js";

// src/database/inputTypeSchemas/CitationsGroupUncheckedCreateInputSchema.ts
import { z } from "zod";
var CitationsGroupUncheckedCreateInputSchema = z.object({
  name: z.string(),
  description: z.string().optional().nullable(),
  entries: z.lazy(() => BibEntryUncheckedCreateNestedManyWithoutCitationGroupsInputSchema).optional()
}).strict();
var CitationsGroupUncheckedCreateInputSchema_default = CitationsGroupUncheckedCreateInputSchema;

export {
  CitationsGroupUncheckedCreateInputSchema,
  CitationsGroupUncheckedCreateInputSchema_default
};
//# sourceMappingURL=chunk-7BQ6H2UF.js.map