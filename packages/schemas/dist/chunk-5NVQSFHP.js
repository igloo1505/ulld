import {
  SubjectCreateManyInputSchema
} from "./chunk-FPHHMBJ6.js";

// src/database/outputTypeSchemas/SubjectCreateManyArgsSchema.ts
import { z } from "zod";
var SubjectCreateManyArgsSchema = z.object({
  data: z.union([SubjectCreateManyInputSchema, SubjectCreateManyInputSchema.array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
var SubjectCreateManyArgsSchema_default = SubjectCreateManyArgsSchema;

export {
  SubjectCreateManyArgsSchema,
  SubjectCreateManyArgsSchema_default
};
//# sourceMappingURL=chunk-5NVQSFHP.js.map