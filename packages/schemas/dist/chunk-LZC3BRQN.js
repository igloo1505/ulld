import {
  QAPairCreateManyInputSchema
} from "./chunk-WWTFCWFJ.js";

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
//# sourceMappingURL=chunk-LZC3BRQN.js.map