import {
  BibEntryCreateNestedManyWithoutCitationGroupsInputSchema
} from "./chunk-PIUQBVB4.js";

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
//# sourceMappingURL=chunk-2XG7OJPW.js.map