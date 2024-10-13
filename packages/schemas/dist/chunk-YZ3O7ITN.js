import {
  QAPairCreateManyInputSchema
} from "./chunk-WWTFCWFJ.js";

// src/database/outputTypeSchemas/QAPairCreateManyArgsSchema.ts
import { z } from "zod";
var QAPairCreateManyArgsSchema = z.object({
  data: z.union([QAPairCreateManyInputSchema, QAPairCreateManyInputSchema.array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
var QAPairCreateManyArgsSchema_default = QAPairCreateManyArgsSchema;

export {
  QAPairCreateManyArgsSchema,
  QAPairCreateManyArgsSchema_default
};
//# sourceMappingURL=chunk-YZ3O7ITN.js.map