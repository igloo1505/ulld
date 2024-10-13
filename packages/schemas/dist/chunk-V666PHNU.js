import {
  BibEntryUncheckedCreateNestedManyWithoutCitationGroupsInputSchema
} from "./chunk-WGTCKPDK.js";

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
//# sourceMappingURL=chunk-V666PHNU.js.map