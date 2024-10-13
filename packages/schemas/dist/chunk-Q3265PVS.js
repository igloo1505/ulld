import {
  FeatureRequestUpdateManyMutationInputSchema
} from "./chunk-T3FYEXKP.js";
import {
  FeatureRequestUncheckedUpdateManyInputSchema
} from "./chunk-3SPKECGC.js";
import {
  FeatureRequestWhereInputSchema
} from "./chunk-JXUPWJVB.js";

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
//# sourceMappingURL=chunk-Q3265PVS.js.map