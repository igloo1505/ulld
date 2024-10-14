import {
  EquationUncheckedUpdateInputSchema
} from "./chunk-XMHGCCFV.js";
import {
  EquationUpdateInputSchema
} from "./chunk-VBSLA5GQ.js";
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
  EquationWhereUniqueInputSchema
} from "./chunk-ZHPM3YVS.js";

// src/database/outputTypeSchemas/EquationUpdateArgsSchema.ts
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
var EquationUpdateArgsSchema = z.object({
  select: EquationSelectSchema.optional(),
  include: EquationIncludeSchema.optional(),
  data: z.union([EquationUpdateInputSchema, EquationUncheckedUpdateInputSchema]),
  where: EquationWhereUniqueInputSchema
}).strict();
var EquationUpdateArgsSchema_default = EquationUpdateArgsSchema;

export {
  EquationSelectSchema,
  EquationUpdateArgsSchema,
  EquationUpdateArgsSchema_default
};
//# sourceMappingURL=chunk-B4KDOIXH.js.map