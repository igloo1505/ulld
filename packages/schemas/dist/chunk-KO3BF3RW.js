// src/database/outputTypeSchemas/EquationCountOutputTypeSelectSchema.ts
import { z } from "zod";
var EquationCountOutputTypeSelectSchema = z.object({
  relatedValues: z.boolean().optional(),
  tags: z.boolean().optional(),
  topics: z.boolean().optional(),
  subjects: z.boolean().optional(),
  mdxNotes: z.boolean().optional()
}).strict();
var EquationCountOutputTypeSelectSchema_default = EquationCountOutputTypeSelectSchema;

export {
  EquationCountOutputTypeSelectSchema,
  EquationCountOutputTypeSelectSchema_default
};
//# sourceMappingURL=chunk-KO3BF3RW.js.map