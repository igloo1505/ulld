import {
  EquationCreateInputSchema
} from "./chunk-BIPSSCD7.js";
import {
  EquationUncheckedCreateInputSchema
} from "./chunk-6JEIMBMN.js";
import {
  EquationUncheckedUpdateInputSchema
} from "./chunk-KCVGTONZ.js";
import {
  EquationUpdateInputSchema
} from "./chunk-AQHQSGIZ.js";
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
  EquationWhereUniqueInputSchema
} from "./chunk-5LG4UXJA.js";

// src/database/outputTypeSchemas/EquationUpsertArgsSchema.ts
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
var EquationUpsertArgsSchema = z.object({
  select: EquationSelectSchema.optional(),
  include: EquationIncludeSchema.optional(),
  where: EquationWhereUniqueInputSchema,
  create: z.union([EquationCreateInputSchema, EquationUncheckedCreateInputSchema]),
  update: z.union([EquationUpdateInputSchema, EquationUncheckedUpdateInputSchema])
}).strict();
var EquationUpsertArgsSchema_default = EquationUpsertArgsSchema;

export {
  EquationSelectSchema,
  EquationUpsertArgsSchema,
  EquationUpsertArgsSchema_default
};
//# sourceMappingURL=chunk-DTXFKRAH.js.map