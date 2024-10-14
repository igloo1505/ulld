import {
  FeatureRequestUpdateManyMutationInputSchema
} from "./chunk-HK77CQYF.js";
import {
  FeatureRequestUncheckedUpdateManyInputSchema
} from "./chunk-4L3U47KJ.js";
import {
  FeatureRequestWhereInputSchema
} from "./chunk-DVDRYS7P.js";

// src/database/outputTypeSchemas/FeatureRequestUpdateManyArgsSchema.ts
import { z } from "zod";
var FeatureRequestUpdateManyArgsSchema = z.object({
  data: z.union([FeatureRequestUpdateManyMutationInputSchema, FeatureRequestUncheckedUpdateManyInputSchema]),
  where: FeatureRequestWhereInputSchema.optional()
}).strict();
var FeatureRequestUpdateManyArgsSchema_default = FeatureRequestUpdateManyArgsSchema;

export {
  FeatureRequestUpdateManyArgsSchema,
  FeatureRequestUpdateManyArgsSchema_default
};
//# sourceMappingURL=chunk-6UGJ6RTN.js.map