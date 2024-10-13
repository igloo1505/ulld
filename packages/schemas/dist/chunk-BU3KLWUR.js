import {
  RelatedValuesSelectSchema
} from "./chunk-DUNQBIVJ.js";
import {
  RelatedValuesIncludeSchema
} from "./chunk-YNCDDFUC.js";

// src/database/outputTypeSchemas/RelatedValuesArgsSchema.ts
import { z } from "zod";
var RelatedValuesArgsSchema = z.object({
  select: z.lazy(() => RelatedValuesSelectSchema).optional(),
  include: z.lazy(() => RelatedValuesIncludeSchema).optional()
}).strict();
var RelatedValuesArgsSchema_default = RelatedValuesArgsSchema;

export {
  RelatedValuesArgsSchema,
  RelatedValuesArgsSchema_default
};
//# sourceMappingURL=chunk-BU3KLWUR.js.map