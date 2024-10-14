import {
  SequentialNoteListOrderByRelevanceInputSchema
} from "./chunk-BXHWLRTY.js";
import {
  IpynbOrderByRelationAggregateInputSchema
} from "./chunk-XY5DOPOB.js";
import {
  MdxNoteOrderByRelationAggregateInputSchema
} from "./chunk-FEI37AUG.js";
import {
  SortOrderSchema
} from "./chunk-WVDZRY2Y.js";

// src/database/inputTypeSchemas/SequentialNoteListOrderByWithRelationInputSchema.ts
import { z } from "zod";
var SequentialNoteListOrderByWithRelationInputSchema = z.object({
  sequentialKey: z.lazy(() => SortOrderSchema).optional(),
  MdxNote: z.lazy(() => MdxNoteOrderByRelationAggregateInputSchema).optional(),
  Ipynb: z.lazy(() => IpynbOrderByRelationAggregateInputSchema).optional(),
  _relevance: z.lazy(() => SequentialNoteListOrderByRelevanceInputSchema).optional()
}).strict();
var SequentialNoteListOrderByWithRelationInputSchema_default = SequentialNoteListOrderByWithRelationInputSchema;

export {
  SequentialNoteListOrderByWithRelationInputSchema,
  SequentialNoteListOrderByWithRelationInputSchema_default
};
//# sourceMappingURL=chunk-PMLTVZ4P.js.map