import {
  EquationFindManyArgsSchema
} from "./chunk-YNCDDFUC.js";
import {
  RelatedValuesCountOutputTypeArgsSchema
} from "./chunk-5C7OOAJR.js";

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
//# sourceMappingURL=chunk-DUNQBIVJ.js.map