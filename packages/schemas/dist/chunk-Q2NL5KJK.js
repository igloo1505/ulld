import {
  FeatureRequestWhereUniqueInputSchema
} from "./chunk-VXVNZ6LJ.js";

// src/database/outputTypeSchemas/FeatureRequestFindUniqueOrThrowArgsSchema.ts
import { z } from "zod";
var FeatureRequestSelectSchema = z.object({
  id: z.boolean().optional(),
  email: z.boolean().optional(),
  message: z.boolean().optional(),
  category: z.boolean().optional(),
  userBase: z.boolean().optional(),
  receivedOn: z.boolean().optional()
}).strict();
var FeatureRequestFindUniqueOrThrowArgsSchema = z.object({
  select: FeatureRequestSelectSchema.optional(),
  where: FeatureRequestWhereUniqueInputSchema
}).strict();
var FeatureRequestFindUniqueOrThrowArgsSchema_default = FeatureRequestFindUniqueOrThrowArgsSchema;

export {
  FeatureRequestSelectSchema,
  FeatureRequestFindUniqueOrThrowArgsSchema,
  FeatureRequestFindUniqueOrThrowArgsSchema_default
};
//# sourceMappingURL=chunk-Q2NL5KJK.js.map