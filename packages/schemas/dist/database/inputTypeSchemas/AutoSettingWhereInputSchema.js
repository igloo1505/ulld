import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema.js';
import { EnumautoSettingFilterSchema } from './EnumautoSettingFilterSchema.js';
import { autoSettingSchema } from './autoSettingSchema.js';
import { StringFilterSchema } from './StringFilterSchema.js';
export const AutoSettingWhereInputSchema = z.object({
    AND: z.union([z.lazy(() => AutoSettingWhereInputSchema), z.lazy(() => AutoSettingWhereInputSchema).array()]).optional(),
    OR: z.lazy(() => AutoSettingWhereInputSchema).array().optional(),
    NOT: z.union([z.lazy(() => AutoSettingWhereInputSchema), z.lazy(() => AutoSettingWhereInputSchema).array()]).optional(),
    id: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
    type: z.union([z.lazy(() => EnumautoSettingFilterSchema), z.lazy(() => autoSettingSchema)]).optional(),
    glob: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    value: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
}).strict();
export default AutoSettingWhereInputSchema;
