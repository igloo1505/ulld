import {
  SubjectOrderByWithRelationInputSchema
} from "./chunk-UAYXEPCR.js";
import {
  SubjectWhereUniqueInputSchema
} from "./chunk-CMHE62EJ.js";
import {
  SubjectWhereInputSchema
} from "./chunk-LSOXTUZL.js";

// src/database/outputTypeSchemas/SubjectAggregateArgsSchema.ts
import { z } from "zod";
var SubjectAggregateArgsSchema = z.object({
  where: SubjectWhereInputSchema.optional(),
  orderBy: z.union([SubjectOrderByWithRelationInputSchema.array(), SubjectOrderByWithRelationInputSchema]).optional(),
  cursor: SubjectWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional()
}).strict();
var SubjectAggregateArgsSchema_default = SubjectAggregateArgsSchema;

export {
  SubjectAggregateArgsSchema,
  SubjectAggregateArgsSchema_default
};
//# sourceMappingURL=chunk-WPUFQD6H.js.map