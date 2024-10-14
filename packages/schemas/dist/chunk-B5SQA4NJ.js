import {
  BibCreateManyInputSchema
} from "./chunk-DVCXPZSM.js";

// src/database/outputTypeSchemas/BibCreateManyArgsSchema.ts
import { z } from "zod";
var BibCreateManyArgsSchema = z.object({
  data: z.union([BibCreateManyInputSchema, BibCreateManyInputSchema.array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
var BibCreateManyArgsSchema_default = BibCreateManyArgsSchema;

export {
  BibCreateManyArgsSchema,
  BibCreateManyArgsSchema_default
};
//# sourceMappingURL=chunk-B5SQA4NJ.js.map