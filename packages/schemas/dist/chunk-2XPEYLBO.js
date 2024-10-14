import {
  QuoteCreateManyInputSchema
} from "./chunk-ZT354ONR.js";

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
//# sourceMappingURL=chunk-2XPEYLBO.js.map