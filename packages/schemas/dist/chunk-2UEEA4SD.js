import {
  SubjectCreateManyInputSchema
} from "./chunk-22IXI3KP.js";

// src/database/outputTypeSchemas/SubjectCreateManyAndReturnArgsSchema.ts
import { z } from "zod";
var SubjectCreateManyAndReturnArgsSchema = z.object({
  data: z.union([SubjectCreateManyInputSchema, SubjectCreateManyInputSchema.array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
var SubjectCreateManyAndReturnArgsSchema_default = SubjectCreateManyAndReturnArgsSchema;

export {
  SubjectCreateManyAndReturnArgsSchema,
  SubjectCreateManyAndReturnArgsSchema_default
};
//# sourceMappingURL=chunk-2UEEA4SD.js.map