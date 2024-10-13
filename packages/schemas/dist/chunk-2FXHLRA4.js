import {
  DefinitionCreateManyMdxNoteInputSchema
} from "./chunk-ZXUVAGXP.js";

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
//# sourceMappingURL=chunk-2FXHLRA4.js.map