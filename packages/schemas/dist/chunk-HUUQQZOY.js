import {
  FeatureRequestUpdateInputSchema
} from "./chunk-I7KOWP6W.js";
import {
  FeatureRequestUncheckedUpdateInputSchema
} from "./chunk-MU4IHSZR.js";
import {
  FeatureRequestWhereUniqueInputSchema
} from "./chunk-RQECGBYQ.js";

// src/database/outputTypeSchemas/FeatureRequestUpdateArgsSchema.ts
import { z } from "zod";
var FeatureRequestSelectSchema = z.object({
  id: z.boolean().optional(),
  email: z.boolean().optional(),
  message: z.boolean().optional(),
  category: z.boolean().optional(),
  userBase: z.boolean().optional(),
  receivedOn: z.boolean().optional()
}).strict();
var FeatureRequestUpdateArgsSchema = z.object({
  select: FeatureRequestSelectSchema.optional(),
  data: z.union([FeatureRequestUpdateInputSchema, FeatureRequestUncheckedUpdateInputSchema]),
  where: FeatureRequestWhereUniqueInputSchema
}).strict();
var FeatureRequestUpdateArgsSchema_default = FeatureRequestUpdateArgsSchema;

export {
  FeatureRequestSelectSchema,
  FeatureRequestUpdateArgsSchema,
  FeatureRequestUpdateArgsSchema_default
};
//# sourceMappingURL=chunk-HUUQQZOY.js.map