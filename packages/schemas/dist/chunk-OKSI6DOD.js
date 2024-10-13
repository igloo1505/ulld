import {
  FeatureRequestCreateManyInputSchema
} from "./chunk-T2VT4DXN.js";

// src/database/outputTypeSchemas/FeatureRequestCreateManyArgsSchema.ts
import { z } from "zod";
var FeatureRequestCreateManyArgsSchema = z.object({
  data: z.union([FeatureRequestCreateManyInputSchema, FeatureRequestCreateManyInputSchema.array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
var FeatureRequestCreateManyArgsSchema_default = FeatureRequestCreateManyArgsSchema;

export {
  FeatureRequestCreateManyArgsSchema,
  FeatureRequestCreateManyArgsSchema_default
};
//# sourceMappingURL=chunk-OKSI6DOD.js.map