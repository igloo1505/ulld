import {
  BoolFieldUpdateOperationsInputSchema
} from "./chunk-APCVB345.js";
import {
  NullableStringFieldUpdateOperationsInputSchema
} from "./chunk-EGW2GABF.js";
import {
  DateTimeFieldUpdateOperationsInputSchema
} from "./chunk-VTROTMKZ.js";
import {
  StringFieldUpdateOperationsInputSchema
} from "./chunk-BQIXGZB5.js";

// src/database/inputTypeSchemas/QuoteUpdateInputSchema.ts
import { z } from "zod";
var QuoteUpdateInputSchema = z.object({
  body: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  author: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  source: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  pinned: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional()
}).strict();
var QuoteUpdateInputSchema_default = QuoteUpdateInputSchema;

export {
  QuoteUpdateInputSchema,
  QuoteUpdateInputSchema_default
};
//# sourceMappingURL=chunk-U2324CQC.js.map