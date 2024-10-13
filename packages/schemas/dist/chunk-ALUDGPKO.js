import {
  GoogleCalendarAuthOrderByRelevanceInputSchema
} from "./chunk-UIVSLPBO.js";
import {
  SortOrderInputSchema
} from "./chunk-V3C74DPQ.js";
import {
  SortOrderSchema
} from "./chunk-2NPOXGXF.js";

// src/database/inputTypeSchemas/GoogleCalendarAuthOrderByWithRelationInputSchema.ts
import { z } from "zod";
var GoogleCalendarAuthOrderByWithRelationInputSchema = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  auth: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
  _relevance: z.lazy(() => GoogleCalendarAuthOrderByRelevanceInputSchema).optional()
}).strict();
var GoogleCalendarAuthOrderByWithRelationInputSchema_default = GoogleCalendarAuthOrderByWithRelationInputSchema;

export {
  GoogleCalendarAuthOrderByWithRelationInputSchema,
  GoogleCalendarAuthOrderByWithRelationInputSchema_default
};
//# sourceMappingURL=chunk-ALUDGPKO.js.map