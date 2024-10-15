import { z } from 'zod';
import { TaskCategorySchema } from './TaskCategorySchema.js';
import { NestedEnumTaskCategoryNullableFilterSchema } from './NestedEnumTaskCategoryNullableFilterSchema.js';
export const EnumTaskCategoryNullableFilterSchema = z.object({
    equals: z.lazy(() => TaskCategorySchema).optional().nullable(),
    in: z.lazy(() => TaskCategorySchema).array().optional().nullable(),
    notIn: z.lazy(() => TaskCategorySchema).array().optional().nullable(),
    not: z.union([z.lazy(() => TaskCategorySchema), z.lazy(() => NestedEnumTaskCategoryNullableFilterSchema)]).optional().nullable(),
}).strict();
export default EnumTaskCategoryNullableFilterSchema;
