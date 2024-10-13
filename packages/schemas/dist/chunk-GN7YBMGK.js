import {
  SequentialNoteListOrderByRelevanceInputSchema
} from "./chunk-F4FDYHHA.js";
import {
  IpynbOrderByRelationAggregateInputSchema
} from "./chunk-NBLKUX7F.js";
import {
  MdxNoteOrderByRelationAggregateInputSchema
} from "./chunk-MWECYKIW.js";
import {
  SortOrderSchema
} from "./chunk-2NPOXGXF.js";

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
//# sourceMappingURL=chunk-GN7YBMGK.js.map