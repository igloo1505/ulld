import {
  EquationFindManyArgsSchema
} from "./chunk-JV52BDQC.js";
import {
  RelatedValuesCountOutputTypeArgsSchema
} from "./chunk-37QIGEAZ.js";

// src/database/inputTypeSchemas/RelatedValuesSelectSchema.ts
import { z } from "zod";
var RelatedValuesSelectSchema = z.object({
  id: z.boolean().optional(),
  input: z.boolean().optional(),
  output: z.boolean().optional(),
  equationId: z.boolean().optional(),
  equations: z.union([z.boolean(), z.lazy(() => EquationFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => RelatedValuesCountOutputTypeArgsSchema)]).optional()
}).strict();
var RelatedValuesSelectSchema_default = RelatedValuesSelectSchema;

export {
  RelatedValuesSelectSchema,
  RelatedValuesSelectSchema_default
};
//# sourceMappingURL=chunk-XGKXJF4O.js.map