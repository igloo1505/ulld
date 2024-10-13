import {
  QuoteUncheckedUpdateManyInputSchema
} from "./chunk-SJ7PTYZI.js";
import {
  QuoteUpdateManyMutationInputSchema
} from "./chunk-WMESGF5Y.js";
import {
  QuoteWhereInputSchema
} from "./chunk-3OXVABPN.js";

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
//# sourceMappingURL=chunk-363DUSIM.js.map