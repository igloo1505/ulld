import { z } from 'zod';
import { autoSettingSchema } from './autoSettingSchema.js';
import { NestedEnumautoSettingFilterSchema } from './NestedEnumautoSettingFilterSchema.js';
export const EnumautoSettingFilterSchema = z.object({
    equals: z.lazy(() => autoSettingSchema).optional(),
    in: z.lazy(() => autoSettingSchema).array().optional(),
    notIn: z.lazy(() => autoSettingSchema).array().optional(),
    not: z.union([z.lazy(() => autoSettingSchema), z.lazy(() => NestedEnumautoSettingFilterSchema)]).optional(),
}).strict();
export default EnumautoSettingFilterSchema;
