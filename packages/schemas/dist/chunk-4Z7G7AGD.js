import {
  MdxNoteCountOrderByAggregateInputSchema
} from "./chunk-JOHWU7F2.js";
import {
  MdxNoteAvgOrderByAggregateInputSchema
} from "./chunk-L2EA5TKZ.js";
import {
  MdxNoteMinOrderByAggregateInputSchema
} from "./chunk-KDWP5C5A.js";
import {
  MdxNoteMaxOrderByAggregateInputSchema
} from "./chunk-DIV7HVYT.js";
import {
  MdxNoteSumOrderByAggregateInputSchema
} from "./chunk-IKCOK7FA.js";
import {
  SortOrderInputSchema
} from "./chunk-V3C74DPQ.js";
import {
  SortOrderSchema
} from "./chunk-2NPOXGXF.js";

// src/database/inputTypeSchemas/MdxNoteOrderByWithAggregationInputSchema.ts
import { z } from "zod";
var MdxNoteOrderByWithAggregationInputSchema = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  isProtected: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
  dietSummaryKey: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  latexTitle: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
  rootRelativePath: z.lazy(() => SortOrderSchema).optional(),
  noteType: z.lazy(() => SortOrderSchema).optional(),
  content: z.lazy(() => SortOrderSchema).optional(),
  formatted: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
  summary: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
  citationsListOrder: z.lazy(() => SortOrderSchema).optional(),
  importantValues: z.lazy(() => SortOrderSchema).optional(),
  imageSrc: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
  href: z.lazy(() => SortOrderSchema).optional(),
  sequentialKey: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
  sequentialIndex: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
  floatImages: z.lazy(() => SortOrderSchema).optional(),
  remoteUrl: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
  trackRemote: z.lazy(() => SortOrderSchema).optional(),
  outgoingQuickLinks: z.lazy(() => SortOrderSchema).optional(),
  quickLink: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
  bookmarked: z.lazy(() => SortOrderSchema).optional(),
  firstSync: z.lazy(() => SortOrderSchema).optional(),
  lastSync: z.lazy(() => SortOrderSchema).optional(),
  lastAccess: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => MdxNoteCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => MdxNoteAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => MdxNoteMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => MdxNoteMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => MdxNoteSumOrderByAggregateInputSchema).optional()
}).strict();
var MdxNoteOrderByWithAggregationInputSchema_default = MdxNoteOrderByWithAggregationInputSchema;

export {
  MdxNoteOrderByWithAggregationInputSchema,
  MdxNoteOrderByWithAggregationInputSchema_default
};
//# sourceMappingURL=chunk-4Z7G7AGD.js.map