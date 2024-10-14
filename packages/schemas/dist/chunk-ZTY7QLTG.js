import {
  MdxNoteCreateManySequentialListInputSchema
} from "./chunk-K3YXCNDR.js";

// src/database/inputTypeSchemas/MdxNoteCreateManySequentialListInputEnvelopeSchema.ts
import { z } from "zod";
var MdxNoteCreateManySequentialListInputEnvelopeSchema = z.object({
  data: z.union([z.lazy(() => MdxNoteCreateManySequentialListInputSchema), z.lazy(() => MdxNoteCreateManySequentialListInputSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
var MdxNoteCreateManySequentialListInputEnvelopeSchema_default = MdxNoteCreateManySequentialListInputEnvelopeSchema;

export {
  MdxNoteCreateManySequentialListInputEnvelopeSchema,
  MdxNoteCreateManySequentialListInputEnvelopeSchema_default
};
//# sourceMappingURL=chunk-ZTY7QLTG.js.map