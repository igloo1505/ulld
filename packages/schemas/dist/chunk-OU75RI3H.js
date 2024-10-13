import {
  EquationOrderByRelevanceInputSchema
} from "./chunk-SQOZM676.js";
import {
  RelatedValuesOrderByRelationAggregateInputSchema
} from "./chunk-HCJII6ZZ.js";
import {
  MdxNoteOrderByRelationAggregateInputSchema
} from "./chunk-MWECYKIW.js";
import {
  SubjectOrderByRelationAggregateInputSchema
} from "./chunk-UXCYAB7S.js";
import {
  TagOrderByRelationAggregateInputSchema
} from "./chunk-KN2IVSLJ.js";
import {
  TopicOrderByRelationAggregateInputSchema
} from "./chunk-3PH77TSO.js";
import {
  SortOrderInputSchema
} from "./chunk-V3C74DPQ.js";
import {
  SortOrderSchema
} from "./chunk-2NPOXGXF.js";

// src/database/inputTypeSchemas/EquationOrderByWithRelationInputSchema.ts
import { z } from "zod";
var EquationOrderByWithRelationInputSchema = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  equationId: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  desc: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
  content: z.lazy(() => SortOrderSchema).optional(),
  asPython: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
  variableLegend: z.lazy(() => SortOrderSchema).optional(),
  variables: z.lazy(() => SortOrderSchema).optional(),
  keywords: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  lastAccess: z.lazy(() => SortOrderSchema).optional(),
  relatedValues: z.lazy(() => RelatedValuesOrderByRelationAggregateInputSchema).optional(),
  tags: z.lazy(() => TagOrderByRelationAggregateInputSchema).optional(),
  topics: z.lazy(() => TopicOrderByRelationAggregateInputSchema).optional(),
  subjects: z.lazy(() => SubjectOrderByRelationAggregateInputSchema).optional(),
  mdxNotes: z.lazy(() => MdxNoteOrderByRelationAggregateInputSchema).optional(),
  _relevance: z.lazy(() => EquationOrderByRelevanceInputSchema).optional()
}).strict();
var EquationOrderByWithRelationInputSchema_default = EquationOrderByWithRelationInputSchema;

export {
  EquationOrderByWithRelationInputSchema,
  EquationOrderByWithRelationInputSchema_default
};
//# sourceMappingURL=chunk-OU75RI3H.js.map