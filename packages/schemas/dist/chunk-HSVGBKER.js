import {
  FeatureRequestCreateInputSchema
} from "./chunk-C32J7ZLV.js";
import {
  FeatureRequestUncheckedCreateInputSchema
} from "./chunk-FY7V2LWQ.js";

// src/database/outputTypeSchemas/FeatureRequestCreateArgsSchema.ts
import { z } from "zod";
var FeatureRequestSelectSchema = z.object({
  id: z.boolean().optional(),
  email: z.boolean().optional(),
  message: z.boolean().optional(),
  category: z.boolean().optional(),
  userBase: z.boolean().optional(),
  receivedOn: z.boolean().optional()
}).strict();
var FeatureRequestCreateArgsSchema = z.object({
  select: FeatureRequestSelectSchema.optional(),
  data: z.union([FeatureRequestCreateInputSchema, FeatureRequestUncheckedCreateInputSchema])
}).strict();
var FeatureRequestCreateArgsSchema_default = FeatureRequestCreateArgsSchema;

export {
  FeatureRequestSelectSchema,
  FeatureRequestCreateArgsSchema,
  FeatureRequestCreateArgsSchema_default
};
//# sourceMappingURL=chunk-HSVGBKER.js.map