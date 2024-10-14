import {
  FeatureRequestCreateManyInputSchema
} from "./chunk-BMKT6KWO.js";

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
//# sourceMappingURL=chunk-MCFHHWTX.js.map