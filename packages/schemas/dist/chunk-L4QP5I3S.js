import {
  GoogleCalendarAuthOrderByRelevanceInputSchema
} from "./chunk-GSEIDEY6.js";
import {
  SortOrderInputSchema
} from "./chunk-IXTUTJ7O.js";
import {
  SortOrderSchema
} from "./chunk-WVDZRY2Y.js";

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
//# sourceMappingURL=chunk-L4QP5I3S.js.map