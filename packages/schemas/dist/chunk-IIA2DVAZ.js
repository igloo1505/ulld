import {
  EquationIncludeSchema,
  MdxNoteFindManyArgsSchema,
  RelatedValuesFindManyArgsSchema,
  SubjectFindManyArgsSchema,
  TagFindManyArgsSchema,
  TopicFindManyArgsSchema
} from "./chunk-JV52BDQC.js";
import {
  EquationCountOutputTypeArgsSchema
} from "./chunk-MONL7CLA.js";
import {
  EquationOrderByWithRelationInputSchema
} from "./chunk-V3JQFU2U.js";
import {
  EquationWhereUniqueInputSchema
} from "./chunk-ZHPM3YVS.js";
import {
  EquationScalarFieldEnumSchema
} from "./chunk-I7LBMM7X.js";
import {
  EquationWhereInputSchema
} from "./chunk-LSOXTUZL.js";

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
//# sourceMappingURL=chunk-IIA2DVAZ.js.map