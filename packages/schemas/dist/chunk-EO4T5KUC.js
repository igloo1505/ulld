import {
  EquationCreatevariablesInputSchema
} from "./chunk-P65CY5HZ.js";
import {
  EquationCreatekeywordsInputSchema
} from "./chunk-L5R5LLYC.js";
import {
  JsonNullValueInputSchema
} from "./chunk-ZXTFXMHW.js";
import {
  InputJsonValueSchema
} from "./chunk-T77FYKUT.js";

// src/database/inputTypeSchemas/EquationCreateManyInputSchema.ts
import { z } from "zod";
var EquationCreateManyInputSchema = z.object({
  id: z.number().int().optional(),
  equationId: z.string().optional().nullable(),
  title: z.string(),
  desc: z.string().optional().nullable(),
  content: z.string(),
  asPython: z.string().optional().nullable(),
  variableLegend: z.union([z.lazy(() => JsonNullValueInputSchema), InputJsonValueSchema]).optional(),
  variables: z.union([z.lazy(() => EquationCreatevariablesInputSchema), z.string().array()]).optional(),
  keywords: z.union([z.lazy(() => EquationCreatekeywordsInputSchema), z.string().array()]).optional(),
  createdAt: z.coerce.date().optional(),
  lastAccess: z.coerce.date().optional()
}).strict();
var EquationCreateManyInputSchema_default = EquationCreateManyInputSchema;

export {
  EquationCreateManyInputSchema,
  EquationCreateManyInputSchema_default
};
//# sourceMappingURL=chunk-EO4T5KUC.js.map