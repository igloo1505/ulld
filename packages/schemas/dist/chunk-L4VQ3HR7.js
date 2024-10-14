import {
  StringNullableFilterSchema
} from "./chunk-2AUFJPNJ.js";
import {
  IntFilterSchema
} from "./chunk-EMYNQWE7.js";

// src/database/inputTypeSchemas/GoogleCalendarAuthWhereInputSchema.ts
import { z } from "zod";
var GoogleCalendarAuthWhereInputSchema = z.object({
  AND: z.union([z.lazy(() => GoogleCalendarAuthWhereInputSchema), z.lazy(() => GoogleCalendarAuthWhereInputSchema).array()]).optional(),
  OR: z.lazy(() => GoogleCalendarAuthWhereInputSchema).array().optional(),
  NOT: z.union([z.lazy(() => GoogleCalendarAuthWhereInputSchema), z.lazy(() => GoogleCalendarAuthWhereInputSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
  auth: z.union([z.lazy(() => StringNullableFilterSchema), z.string()]).optional().nullable()
}).strict();
var GoogleCalendarAuthWhereInputSchema_default = GoogleCalendarAuthWhereInputSchema;

export {
  GoogleCalendarAuthWhereInputSchema,
  GoogleCalendarAuthWhereInputSchema_default
};
//# sourceMappingURL=chunk-L4VQ3HR7.js.map