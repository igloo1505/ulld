import {
  SubjectOrderByWithAggregationInputSchema
} from "./chunk-GNZQ3ECK.js";
import {
  SubjectScalarWhereWithAggregatesInputSchema
} from "./chunk-FL3WVR2O.js";
import {
  SubjectScalarFieldEnumSchema
} from "./chunk-N54A6FQI.js";
import {
  SubjectWhereInputSchema
} from "./chunk-LSOXTUZL.js";

// src/database/outputTypeSchemas/SubjectGroupByArgsSchema.ts
import { z } from "zod";
var SubjectGroupByArgsSchema = z.object({
  where: SubjectWhereInputSchema.optional(),
  orderBy: z.union([SubjectOrderByWithAggregationInputSchema.array(), SubjectOrderByWithAggregationInputSchema]).optional(),
  by: SubjectScalarFieldEnumSchema.array(),
  having: SubjectScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional()
}).strict();
var SubjectGroupByArgsSchema_default = SubjectGroupByArgsSchema;

export {
  SubjectGroupByArgsSchema,
  SubjectGroupByArgsSchema_default
};
//# sourceMappingURL=chunk-GTOKRNJS.js.map