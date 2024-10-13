import {
  RelatedValuesCreateManyInputSchema
} from "./chunk-HQR3K3BW.js";

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
//# sourceMappingURL=chunk-2U7A4NRH.js.map