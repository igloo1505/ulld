import { z } from 'zod';
import { SettingsWhereInputSchema } from './SettingsWhereInputSchema.js';
import { BoolFilterSchema } from './BoolFilterSchema.js';
import { StringFilterSchema } from './StringFilterSchema.js';
import { EnumImageAlignmentFilterSchema } from './EnumImageAlignmentFilterSchema.js';
import { ImageAlignmentSchema } from './ImageAlignmentSchema.js';
import { StringNullableFilterSchema } from './StringNullableFilterSchema.js';
import { JsonFilterSchema } from './JsonFilterSchema.js';
import { DateTimeFilterSchema } from './DateTimeFilterSchema.js';
export const SettingsWhereUniqueInputSchema = z.object({
    id: z.number().int()
})
    .and(z.object({
    id: z.number().int().optional(),
    AND: z.union([z.lazy(() => SettingsWhereInputSchema), z.lazy(() => SettingsWhereInputSchema).array()]).optional(),
    OR: z.lazy(() => SettingsWhereInputSchema).array().optional(),
    NOT: z.union([z.lazy(() => SettingsWhereInputSchema), z.lazy(() => SettingsWhereInputSchema).array()]).optional(),
    tooltips: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
    title: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    summary_showCitations: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
    summary_showTags: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
    landingImageAlign: z.union([z.lazy(() => EnumImageAlignmentFilterSchema), z.lazy(() => ImageAlignmentSchema)]).optional(),
    lockedLandingImage: z.union([z.lazy(() => StringNullableFilterSchema), z.string()]).optional().nullable(),
    cleanOnSync: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
    plotTheme: z.union([z.lazy(() => StringNullableFilterSchema), z.string()]).optional().nullable(),
    pluginSettings: z.lazy(() => JsonFilterSchema).optional(),
    firstSync: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
    lastSync: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
}).strict());
export default SettingsWhereUniqueInputSchema;
