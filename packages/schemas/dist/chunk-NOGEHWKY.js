import {
  RelatedValuesCreateManyInputSchema
} from "./chunk-56TXXPIQ.js";

// src/database/outputTypeSchemas/RelatedValuesCreateManyAndReturnArgsSchema.ts
import { z } from "zod";
var RelatedValuesCreateManyAndReturnArgsSchema = z.object({
  data: z.union([RelatedValuesCreateManyInputSchema, RelatedValuesCreateManyInputSchema.array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
var RelatedValuesCreateManyAndReturnArgsSchema_default = RelatedValuesCreateManyAndReturnArgsSchema;

export {
  RelatedValuesCreateManyAndReturnArgsSchema,
  RelatedValuesCreateManyAndReturnArgsSchema_default
};
//# sourceMappingURL=chunk-NOGEHWKY.js.map