import {
  BibCreateManyInputSchema
} from "./chunk-NZDDVQLS.js";

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
//# sourceMappingURL=chunk-GDGM2I4V.js.map