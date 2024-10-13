import {
  FeatureRequestCreateInputSchema
} from "./chunk-C32J7ZLV.js";
import {
  FeatureRequestUncheckedCreateInputSchema
} from "./chunk-FY7V2LWQ.js";
import {
  FeatureRequestUpdateInputSchema
} from "./chunk-Z6ZJ5A5L.js";
import {
  FeatureRequestUncheckedUpdateInputSchema
} from "./chunk-Z54BN3DU.js";
import {
  FeatureRequestWhereUniqueInputSchema
} from "./chunk-VXVNZ6LJ.js";

// src/database/outputTypeSchemas/FeatureRequestUpsertArgsSchema.ts
import { z } from "zod";
var FeatureRequestSelectSchema = z.object({
  id: z.boolean().optional(),
  email: z.boolean().optional(),
  message: z.boolean().optional(),
  category: z.boolean().optional(),
  userBase: z.boolean().optional(),
  receivedOn: z.boolean().optional()
}).strict();
var FeatureRequestUpsertArgsSchema = z.object({
  select: FeatureRequestSelectSchema.optional(),
  where: FeatureRequestWhereUniqueInputSchema,
  create: z.union([FeatureRequestCreateInputSchema, FeatureRequestUncheckedCreateInputSchema]),
  update: z.union([FeatureRequestUpdateInputSchema, FeatureRequestUncheckedUpdateInputSchema])
}).strict();
var FeatureRequestUpsertArgsSchema_default = FeatureRequestUpsertArgsSchema;

export {
  FeatureRequestSelectSchema,
  FeatureRequestUpsertArgsSchema,
  FeatureRequestUpsertArgsSchema_default
};
//# sourceMappingURL=chunk-JJSBLD7C.js.map