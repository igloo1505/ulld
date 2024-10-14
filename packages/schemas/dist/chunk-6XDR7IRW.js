// src/database/inputTypeSchemas/QAPairCreateManyInputSchema.ts
import { z } from "zod";
var QAPairCreateManyInputSchema = z.object({
  id: z.string(),
  question: z.string(),
  answer: z.string(),
  description: z.string().optional().nullable(),
  secondaryLabel: z.string().optional().nullable(),
  correctCount: z.number().int().optional(),
  inCorrectCount: z.number().int().optional()
}).strict();
var QAPairCreateManyInputSchema_default = QAPairCreateManyInputSchema;

export {
  QAPairCreateManyInputSchema,
  QAPairCreateManyInputSchema_default
};
//# sourceMappingURL=chunk-6XDR7IRW.js.map