import {
  FeatureRequestCreateManyInputSchema
} from "./chunk-BMKT6KWO.js";

// src/database/outputTypeSchemas/FeatureRequestCreateManyAndReturnArgsSchema.ts
import { z } from "zod";
var FeatureRequestCreateManyAndReturnArgsSchema = z.object({
  data: z.union([FeatureRequestCreateManyInputSchema, FeatureRequestCreateManyInputSchema.array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
var FeatureRequestCreateManyAndReturnArgsSchema_default = FeatureRequestCreateManyAndReturnArgsSchema;

export {
  FeatureRequestCreateManyAndReturnArgsSchema,
  FeatureRequestCreateManyAndReturnArgsSchema_default
};
//# sourceMappingURL=chunk-5MB5ERLJ.js.map