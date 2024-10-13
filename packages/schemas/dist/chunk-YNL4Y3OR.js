import {
  QuoteCreateManyInputSchema
} from "./chunk-NBDT4RMU.js";

// src/database/outputTypeSchemas/QuoteCreateManyArgsSchema.ts
import { z } from "zod";
var QuoteCreateManyArgsSchema = z.object({
  data: z.union([QuoteCreateManyInputSchema, QuoteCreateManyInputSchema.array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
var QuoteCreateManyArgsSchema_default = QuoteCreateManyArgsSchema;

export {
  QuoteCreateManyArgsSchema,
  QuoteCreateManyArgsSchema_default
};
//# sourceMappingURL=chunk-YNL4Y3OR.js.map