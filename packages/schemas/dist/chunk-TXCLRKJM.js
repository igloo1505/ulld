import {
  BibEntryCreateNestedManyWithoutCitationGroupsInputSchema
} from "./chunk-CTEB2ZEQ.js";

// src/database/inputTypeSchemas/CitationsGroupCreateInputSchema.ts
import { z } from "zod";
var CitationsGroupCreateInputSchema = z.object({
  name: z.string(),
  description: z.string().optional().nullable(),
  entries: z.lazy(() => BibEntryCreateNestedManyWithoutCitationGroupsInputSchema).optional()
}).strict();
var CitationsGroupCreateInputSchema_default = CitationsGroupCreateInputSchema;

export {
  CitationsGroupCreateInputSchema,
  CitationsGroupCreateInputSchema_default
};
//# sourceMappingURL=chunk-TXCLRKJM.js.map