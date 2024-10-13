import {
  GoogleCalendarAuthWhereInputSchema
} from "./chunk-JBN2LWOB.js";
import {
  StringNullableFilterSchema
} from "./chunk-2QBRQQJV.js";

// src/database/inputTypeSchemas/GoogleCalendarAuthWhereUniqueInputSchema.ts
import { z } from "zod";
var GoogleCalendarAuthWhereUniqueInputSchema = z.object({
  id: z.number().int()
}).and(z.object({
  id: z.number().int().optional(),
  AND: z.union([z.lazy(() => GoogleCalendarAuthWhereInputSchema), z.lazy(() => GoogleCalendarAuthWhereInputSchema).array()]).optional(),
  OR: z.lazy(() => GoogleCalendarAuthWhereInputSchema).array().optional(),
  NOT: z.union([z.lazy(() => GoogleCalendarAuthWhereInputSchema), z.lazy(() => GoogleCalendarAuthWhereInputSchema).array()]).optional(),
  auth: z.union([z.lazy(() => StringNullableFilterSchema), z.string()]).optional().nullable()
}).strict());
var GoogleCalendarAuthWhereUniqueInputSchema_default = GoogleCalendarAuthWhereUniqueInputSchema;

export {
  GoogleCalendarAuthWhereUniqueInputSchema,
  GoogleCalendarAuthWhereUniqueInputSchema_default
};
//# sourceMappingURL=chunk-PJGNE4ZK.js.map