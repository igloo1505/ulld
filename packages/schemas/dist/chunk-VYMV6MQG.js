import {
  FeatureRequestUpdateInputSchema
} from "./chunk-Z6ZJ5A5L.js";
import {
  FeatureRequestUncheckedUpdateInputSchema
} from "./chunk-Z54BN3DU.js";
import {
  FeatureRequestWhereUniqueInputSchema
} from "./chunk-VXVNZ6LJ.js";

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
//# sourceMappingURL=chunk-VYMV6MQG.js.map