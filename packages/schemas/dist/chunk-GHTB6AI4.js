import {
  QuoteCreateManyInputSchema
} from "./chunk-ZT354ONR.js";

// src/database/outputTypeSchemas/QuoteCreateManyAndReturnArgsSchema.ts
import { z } from "zod";
var QuoteCreateManyAndReturnArgsSchema = z.object({
  data: z.union([QuoteCreateManyInputSchema, QuoteCreateManyInputSchema.array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
var QuoteCreateManyAndReturnArgsSchema_default = QuoteCreateManyAndReturnArgsSchema;

export {
  QuoteCreateManyAndReturnArgsSchema,
  QuoteCreateManyAndReturnArgsSchema_default
};
//# sourceMappingURL=chunk-GHTB6AI4.js.map