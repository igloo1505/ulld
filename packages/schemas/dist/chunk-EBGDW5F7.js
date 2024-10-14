import {
  RelatedValuesSelectSchema
} from "./chunk-XGKXJF4O.js";
import {
  RelatedValuesIncludeSchema
} from "./chunk-JV52BDQC.js";

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
//# sourceMappingURL=chunk-EBGDW5F7.js.map