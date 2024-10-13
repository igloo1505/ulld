import {
  RelatedValuesCreateManyInputSchema
} from "./chunk-HQR3K3BW.js";

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
//# sourceMappingURL=chunk-DALCSRKY.js.map