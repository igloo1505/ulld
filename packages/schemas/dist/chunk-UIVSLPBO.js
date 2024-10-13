import {
  GoogleCalendarAuthOrderByRelevanceFieldEnumSchema
} from "./chunk-7HXREGPG.js";
import {
  SortOrderSchema
} from "./chunk-2NPOXGXF.js";

// src/database/inputTypeSchemas/GoogleCalendarAuthOrderByRelevanceInputSchema.ts
import { z } from "zod";
var GoogleCalendarAuthOrderByRelevanceInputSchema = z.object({
  fields: z.union([z.lazy(() => GoogleCalendarAuthOrderByRelevanceFieldEnumSchema), z.lazy(() => GoogleCalendarAuthOrderByRelevanceFieldEnumSchema).array()]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();
var GoogleCalendarAuthOrderByRelevanceInputSchema_default = GoogleCalendarAuthOrderByRelevanceInputSchema;

export {
  GoogleCalendarAuthOrderByRelevanceInputSchema,
  GoogleCalendarAuthOrderByRelevanceInputSchema_default
};
//# sourceMappingURL=chunk-UIVSLPBO.js.map