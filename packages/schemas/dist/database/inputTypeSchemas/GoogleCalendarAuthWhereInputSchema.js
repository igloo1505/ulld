import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema.js';
import { StringNullableFilterSchema } from './StringNullableFilterSchema.js';
export const GoogleCalendarAuthWhereInputSchema = z.object({
    AND: z.union([z.lazy(() => GoogleCalendarAuthWhereInputSchema), z.lazy(() => GoogleCalendarAuthWhereInputSchema).array()]).optional(),
    OR: z.lazy(() => GoogleCalendarAuthWhereInputSchema).array().optional(),
    NOT: z.union([z.lazy(() => GoogleCalendarAuthWhereInputSchema), z.lazy(() => GoogleCalendarAuthWhereInputSchema).array()]).optional(),
    id: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
    auth: z.union([z.lazy(() => StringNullableFilterSchema), z.string()]).optional().nullable(),
}).strict();
export default GoogleCalendarAuthWhereInputSchema;
