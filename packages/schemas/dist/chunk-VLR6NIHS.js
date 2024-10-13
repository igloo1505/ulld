import {
  FeatureRequestWhereUniqueInputSchema
} from "./chunk-VXVNZ6LJ.js";

// src/database/outputTypeSchemas/FeatureRequestFindUniqueArgsSchema.ts
import { z } from "zod";
var FeatureRequestSelectSchema = z.object({
  id: z.boolean().optional(),
  email: z.boolean().optional(),
  message: z.boolean().optional(),
  category: z.boolean().optional(),
  userBase: z.boolean().optional(),
  receivedOn: z.boolean().optional()
}).strict();
var FeatureRequestFindUniqueArgsSchema = z.object({
  select: FeatureRequestSelectSchema.optional(),
  where: FeatureRequestWhereUniqueInputSchema
}).strict();
var FeatureRequestFindUniqueArgsSchema_default = FeatureRequestFindUniqueArgsSchema;

export {
  FeatureRequestSelectSchema,
  FeatureRequestFindUniqueArgsSchema,
  FeatureRequestFindUniqueArgsSchema_default
};
//# sourceMappingURL=chunk-VLR6NIHS.js.map