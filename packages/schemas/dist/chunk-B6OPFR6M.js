import {
  SubjectOrderByWithAggregationInputSchema
} from "./chunk-SJG3HHEG.js";
import {
  SubjectScalarWhereWithAggregatesInputSchema
} from "./chunk-KBTSNRSN.js";
import {
  SubjectScalarFieldEnumSchema
} from "./chunk-AXYL3OOT.js";
import {
  SubjectWhereInputSchema
} from "./chunk-XHIJ766H.js";

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
//# sourceMappingURL=chunk-B6OPFR6M.js.map