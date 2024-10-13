import {
  ServingCreateManyItemInputSchema
} from "./chunk-L2LTRKMO.js";

// src/database/inputTypeSchemas/ServingCreateManyItemInputEnvelopeSchema.ts
import { z } from "zod";
var ServingCreateManyItemInputEnvelopeSchema = z.object({
  data: z.union([z.lazy(() => ServingCreateManyItemInputSchema), z.lazy(() => ServingCreateManyItemInputSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
var ServingCreateManyItemInputEnvelopeSchema_default = ServingCreateManyItemInputEnvelopeSchema;

export {
  ServingCreateManyItemInputEnvelopeSchema,
  ServingCreateManyItemInputEnvelopeSchema_default
};
//# sourceMappingURL=chunk-AJCHFE7C.js.map