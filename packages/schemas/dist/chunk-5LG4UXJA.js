import {
  EquationWhereInputSchema,
  MdxNoteListRelationFilterSchema,
  RelatedValuesListRelationFilterSchema,
  SubjectListRelationFilterSchema,
  TagListRelationFilterSchema,
  TopicListRelationFilterSchema
} from "./chunk-XHIJ766H.js";
import {
  JsonFilterSchema
} from "./chunk-P3VE75MX.js";
import {
  StringNullableListFilterSchema
} from "./chunk-6ULEVKEC.js";
import {
  StringNullableFilterSchema
} from "./chunk-2QBRQQJV.js";
import {
  DateTimeFilterSchema
} from "./chunk-JHI3RHA5.js";
import {
  StringFilterSchema
} from "./chunk-PJ2BGJH5.js";

// src/database/inputTypeSchemas/EquationWhereUniqueInputSchema.ts
import { z } from "zod";
var EquationWhereUniqueInputSchema = z.union([
  z.object({
    id: z.number().int(),
    equationId: z.string()
  }),
  z.object({
    id: z.number().int()
  }),
  z.object({
    equationId: z.string()
  })
]).and(z.object({
  id: z.number().int().optional(),
  equationId: z.string().optional(),
  AND: z.union([z.lazy(() => EquationWhereInputSchema), z.lazy(() => EquationWhereInputSchema).array()]).optional(),
  OR: z.lazy(() => EquationWhereInputSchema).array().optional(),
  NOT: z.union([z.lazy(() => EquationWhereInputSchema), z.lazy(() => EquationWhereInputSchema).array()]).optional(),
  title: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  desc: z.union([z.lazy(() => StringNullableFilterSchema), z.string()]).optional().nullable(),
  content: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  asPython: z.union([z.lazy(() => StringNullableFilterSchema), z.string()]).optional().nullable(),
  variableLegend: z.lazy(() => JsonFilterSchema).optional(),
  variables: z.lazy(() => StringNullableListFilterSchema).optional(),
  keywords: z.lazy(() => StringNullableListFilterSchema).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
  lastAccess: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
  relatedValues: z.lazy(() => RelatedValuesListRelationFilterSchema).optional(),
  tags: z.lazy(() => TagListRelationFilterSchema).optional(),
  topics: z.lazy(() => TopicListRelationFilterSchema).optional(),
  subjects: z.lazy(() => SubjectListRelationFilterSchema).optional(),
  mdxNotes: z.lazy(() => MdxNoteListRelationFilterSchema).optional()
}).strict());
var EquationWhereUniqueInputSchema_default = EquationWhereUniqueInputSchema;

export {
  EquationWhereUniqueInputSchema,
  EquationWhereUniqueInputSchema_default
};
//# sourceMappingURL=chunk-5LG4UXJA.js.map