import {
  FeatureRequestWhereUniqueInputSchema
} from "./chunk-RQECGBYQ.js";

// src/database/outputTypeSchemas/FeatureRequestDeleteArgsSchema.ts
import { z } from "zod";
var FeatureRequestSelectSchema = z.object({
  id: z.boolean().optional(),
  email: z.boolean().optional(),
  message: z.boolean().optional(),
  category: z.boolean().optional(),
  userBase: z.boolean().optional(),
  receivedOn: z.boolean().optional()
}).strict();
var FeatureRequestDeleteArgsSchema = z.object({
  select: FeatureRequestSelectSchema.optional(),
  where: FeatureRequestWhereUniqueInputSchema
}).strict();
var FeatureRequestDeleteArgsSchema_default = FeatureRequestDeleteArgsSchema;

export {
  FeatureRequestSelectSchema,
  FeatureRequestDeleteArgsSchema,
  FeatureRequestDeleteArgsSchema_default
};
//# sourceMappingURL=chunk-23OK4M3R.js.map