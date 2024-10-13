import {
  IpynbCreateManySequentialListInputSchema
} from "./chunk-UVMJ6NFL.js";

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
//# sourceMappingURL=chunk-7X3CXX7G.js.map