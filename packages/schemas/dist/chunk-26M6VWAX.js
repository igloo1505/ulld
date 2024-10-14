import {
  RelatedValuesCreateManyInputSchema
} from "./chunk-56TXXPIQ.js";

// src/database/outputTypeSchemas/RelatedValuesCreateManyArgsSchema.ts
import { z } from "zod";
var RelatedValuesCreateManyArgsSchema = z.object({
  data: z.union([RelatedValuesCreateManyInputSchema, RelatedValuesCreateManyInputSchema.array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
var RelatedValuesCreateManyArgsSchema_default = RelatedValuesCreateManyArgsSchema;

export {
  RelatedValuesCreateManyArgsSchema,
  RelatedValuesCreateManyArgsSchema_default
};
//# sourceMappingURL=chunk-26M6VWAX.js.map