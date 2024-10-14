import {
  EquationOrderByRelevanceInputSchema
} from "./chunk-33KHBRDI.js";
import {
  RelatedValuesOrderByRelationAggregateInputSchema
} from "./chunk-EOWS52EL.js";
import {
  MdxNoteOrderByRelationAggregateInputSchema
} from "./chunk-FEI37AUG.js";
import {
  SubjectOrderByRelationAggregateInputSchema
} from "./chunk-TYDF4OCO.js";
import {
  TagOrderByRelationAggregateInputSchema
} from "./chunk-YD6HBAOC.js";
import {
  TopicOrderByRelationAggregateInputSchema
} from "./chunk-GGRFX4OU.js";
import {
  SortOrderInputSchema
} from "./chunk-IXTUTJ7O.js";
import {
  SortOrderSchema
} from "./chunk-WVDZRY2Y.js";

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
//# sourceMappingURL=chunk-V3JQFU2U.js.map