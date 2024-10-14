import {
  QuoteUncheckedUpdateManyInputSchema
} from "./chunk-HTNUGRZO.js";
import {
  QuoteUpdateManyMutationInputSchema
} from "./chunk-PH2L5N2H.js";
import {
  QuoteWhereInputSchema
} from "./chunk-BT6JUMEM.js";

// src/database/outputTypeSchemas/QuoteUpdateManyArgsSchema.ts
import { z } from "zod";
var QuoteUpdateManyArgsSchema = z.object({
  data: z.union([QuoteUpdateManyMutationInputSchema, QuoteUncheckedUpdateManyInputSchema]),
  where: QuoteWhereInputSchema.optional()
}).strict();
var QuoteUpdateManyArgsSchema_default = QuoteUpdateManyArgsSchema;

export {
  QuoteUpdateManyArgsSchema,
  QuoteUpdateManyArgsSchema_default
};
//# sourceMappingURL=chunk-7JBDPEOW.js.map