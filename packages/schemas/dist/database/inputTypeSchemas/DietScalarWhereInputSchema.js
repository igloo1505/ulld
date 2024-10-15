import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema.js';
import { StringNullableFilterSchema } from './StringNullableFilterSchema.js';
import { BoolFilterSchema } from './BoolFilterSchema.js';
import { EnumTERTIARY_TOGGLEFilterSchema } from './EnumTERTIARY_TOGGLEFilterSchema.js';
import { TERTIARY_TOGGLESchema } from './TERTIARY_TOGGLESchema.js';
import { FloatNullableFilterSchema } from './FloatNullableFilterSchema.js';
import { EnumDIETARY_GOALNullableListFilterSchema } from './EnumDIETARY_GOALNullableListFilterSchema.js';
import { DateTimeFilterSchema } from './DateTimeFilterSchema.js';
export const DietScalarWhereInputSchema = z.object({
    AND: z.union([z.lazy(() => DietScalarWhereInputSchema), z.lazy(() => DietScalarWhereInputSchema).array()]).optional(),
    OR: z.lazy(() => DietScalarWhereInputSchema).array().optional(),
    NOT: z.union([z.lazy(() => DietScalarWhereInputSchema), z.lazy(() => DietScalarWhereInputSchema).array()]).optional(),
    name: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    summary: z.union([z.lazy(() => StringNullableFilterSchema), z.string()]).optional().nullable(),
    activelyFollowing: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
    gf: z.union([z.lazy(() => EnumTERTIARY_TOGGLEFilterSchema), z.lazy(() => TERTIARY_TOGGLESchema)]).optional(),
    vegan: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
    pescatarian: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
    vegetarian: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
    fasting: z.union([z.lazy(() => EnumTERTIARY_TOGGLEFilterSchema), z.lazy(() => TERTIARY_TOGGLESchema)]).optional(),
    cardioTraining: z.union([z.lazy(() => EnumTERTIARY_TOGGLEFilterSchema), z.lazy(() => TERTIARY_TOGGLESchema)]).optional(),
    weightTraining: z.union([z.lazy(() => EnumTERTIARY_TOGGLEFilterSchema), z.lazy(() => TERTIARY_TOGGLESchema)]).optional(),
    carb: z.union([z.lazy(() => FloatNullableFilterSchema), z.number()]).optional().nullable(),
    pro: z.union([z.lazy(() => FloatNullableFilterSchema), z.number()]).optional().nullable(),
    fat: z.union([z.lazy(() => FloatNullableFilterSchema), z.number()]).optional().nullable(),
    goals: z.lazy(() => EnumDIETARY_GOALNullableListFilterSchema).optional(),
    created: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
    lastUpdate: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
}).strict();
export default DietScalarWhereInputSchema;
