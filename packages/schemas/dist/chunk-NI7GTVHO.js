import {
  DefinitionCreateManyMdxNoteInputSchema
} from "./chunk-WBF2Y67K.js";

// src/database/inputTypeSchemas/DefinitionCreateManyMdxNoteInputEnvelopeSchema.ts
import { z } from "zod";
var DefinitionCreateManyMdxNoteInputEnvelopeSchema = z.object({
  data: z.union([z.lazy(() => DefinitionCreateManyMdxNoteInputSchema), z.lazy(() => DefinitionCreateManyMdxNoteInputSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
var DefinitionCreateManyMdxNoteInputEnvelopeSchema_default = DefinitionCreateManyMdxNoteInputEnvelopeSchema;

export {
  DefinitionCreateManyMdxNoteInputEnvelopeSchema,
  DefinitionCreateManyMdxNoteInputEnvelopeSchema_default
};
//# sourceMappingURL=chunk-NI7GTVHO.js.map