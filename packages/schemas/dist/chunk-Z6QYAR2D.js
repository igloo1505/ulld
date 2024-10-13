import {
  EquationIncludeSchema,
  MdxNoteFindManyArgsSchema,
  RelatedValuesFindManyArgsSchema,
  SubjectFindManyArgsSchema,
  TagFindManyArgsSchema,
  TopicFindManyArgsSchema
} from "./chunk-YNCDDFUC.js";
import {
  EquationCountOutputTypeArgsSchema
} from "./chunk-TZP7JD5G.js";
import {
  EquationOrderByWithRelationInputSchema
} from "./chunk-OU75RI3H.js";
import {
  EquationWhereUniqueInputSchema
} from "./chunk-5LG4UXJA.js";
import {
  EquationScalarFieldEnumSchema
} from "./chunk-QGOGRLID.js";
import {
  EquationWhereInputSchema
} from "./chunk-XHIJ766H.js";

// src/database/outputTypeSchemas/EquationFindFirstOrThrowArgsSchema.ts
import { z } from "zod";
var EquationSelectSchema = z.object({
  id: z.boolean().optional(),
  equationId: z.boolean().optional(),
  title: z.boolean().optional(),
  desc: z.boolean().optional(),
  content: z.boolean().optional(),
  asPython: z.boolean().optional(),
  variableLegend: z.boolean().optional(),
  variables: z.boolean().optional(),
  keywords: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  lastAccess: z.boolean().optional(),
  relatedValues: z.union([z.boolean(), z.lazy(() => RelatedValuesFindManyArgsSchema)]).optional(),
  tags: z.union([z.boolean(), z.lazy(() => TagFindManyArgsSchema)]).optional(),
  topics: z.union([z.boolean(), z.lazy(() => TopicFindManyArgsSchema)]).optional(),
  subjects: z.union([z.boolean(), z.lazy(() => SubjectFindManyArgsSchema)]).optional(),
  mdxNotes: z.union([z.boolean(), z.lazy(() => MdxNoteFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => EquationCountOutputTypeArgsSchema)]).optional()
}).strict();
var EquationFindFirstOrThrowArgsSchema = z.object({
  select: EquationSelectSchema.optional(),
  include: EquationIncludeSchema.optional(),
  where: EquationWhereInputSchema.optional(),
  orderBy: z.union([EquationOrderByWithRelationInputSchema.array(), EquationOrderByWithRelationInputSchema]).optional(),
  cursor: EquationWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([EquationScalarFieldEnumSchema, EquationScalarFieldEnumSchema.array()]).optional()
}).strict();
var EquationFindFirstOrThrowArgsSchema_default = EquationFindFirstOrThrowArgsSchema;

export {
  EquationSelectSchema,
  EquationFindFirstOrThrowArgsSchema,
  EquationFindFirstOrThrowArgsSchema_default
};
//# sourceMappingURL=chunk-Z6QYAR2D.js.map