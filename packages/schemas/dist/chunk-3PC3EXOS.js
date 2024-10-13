import {
  SubjectOrderByWithRelationInputSchema
} from "./chunk-JNZNNKNJ.js";
import {
  SubjectWhereUniqueInputSchema
} from "./chunk-YNINQI6L.js";
import {
  SubjectWhereInputSchema
} from "./chunk-XHIJ766H.js";

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
//# sourceMappingURL=chunk-3PC3EXOS.js.map