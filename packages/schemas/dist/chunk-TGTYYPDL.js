import {
  IpynbCreateManySequentialListInputSchema
} from "./chunk-F6JWZR4H.js";

// src/database/inputTypeSchemas/IpynbCreateManySequentialListInputEnvelopeSchema.ts
import { z } from "zod";
var IpynbCreateManySequentialListInputEnvelopeSchema = z.object({
  data: z.union([z.lazy(() => IpynbCreateManySequentialListInputSchema), z.lazy(() => IpynbCreateManySequentialListInputSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
var IpynbCreateManySequentialListInputEnvelopeSchema_default = IpynbCreateManySequentialListInputEnvelopeSchema;

export {
  IpynbCreateManySequentialListInputEnvelopeSchema,
  IpynbCreateManySequentialListInputEnvelopeSchema_default
};
//# sourceMappingURL=chunk-TGTYYPDL.js.map