import {
  QAPairCreateManyInputSchema
} from "./chunk-6XDR7IRW.js";

// src/database/outputTypeSchemas/QAPairCreateManyAndReturnArgsSchema.ts
import { z } from "zod";
var QAPairCreateManyAndReturnArgsSchema = z.object({
  data: z.union([QAPairCreateManyInputSchema, QAPairCreateManyInputSchema.array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
var QAPairCreateManyAndReturnArgsSchema_default = QAPairCreateManyAndReturnArgsSchema;

export {
  QAPairCreateManyAndReturnArgsSchema,
  QAPairCreateManyAndReturnArgsSchema_default
};
//# sourceMappingURL=chunk-UVTJJ6V5.js.map