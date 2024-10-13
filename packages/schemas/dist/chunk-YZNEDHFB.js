import {
  SubjectCreateManyInputSchema
} from "./chunk-22IXI3KP.js";

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
//# sourceMappingURL=chunk-YZNEDHFB.js.map