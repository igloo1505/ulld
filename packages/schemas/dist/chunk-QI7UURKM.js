import {
  BibCreateManyInputSchema
} from "./chunk-DVCXPZSM.js";

// src/database/outputTypeSchemas/BibCreateManyAndReturnArgsSchema.ts
import { z } from "zod";
var BibCreateManyAndReturnArgsSchema = z.object({
  data: z.union([BibCreateManyInputSchema, BibCreateManyInputSchema.array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
var BibCreateManyAndReturnArgsSchema_default = BibCreateManyAndReturnArgsSchema;

export {
  BibCreateManyAndReturnArgsSchema,
  BibCreateManyAndReturnArgsSchema_default
};
//# sourceMappingURL=chunk-QI7UURKM.js.map