import { z } from 'zod';
import { TERTIARY_TOGGLESchema } from './TERTIARY_TOGGLESchema.js';
import { NestedEnumTERTIARY_TOGGLEWithAggregatesFilterSchema } from './NestedEnumTERTIARY_TOGGLEWithAggregatesFilterSchema.js';
import { NestedIntFilterSchema } from './NestedIntFilterSchema.js';
import { NestedEnumTERTIARY_TOGGLEFilterSchema } from './NestedEnumTERTIARY_TOGGLEFilterSchema.js';
export const EnumTERTIARY_TOGGLEWithAggregatesFilterSchema = z.object({
    equals: z.lazy(() => TERTIARY_TOGGLESchema).optional(),
    in: z.lazy(() => TERTIARY_TOGGLESchema).array().optional(),
    notIn: z.lazy(() => TERTIARY_TOGGLESchema).array().optional(),
    not: z.union([z.lazy(() => TERTIARY_TOGGLESchema), z.lazy(() => NestedEnumTERTIARY_TOGGLEWithAggregatesFilterSchema)]).optional(),
    _count: z.lazy(() => NestedIntFilterSchema).optional(),
    _min: z.lazy(() => NestedEnumTERTIARY_TOGGLEFilterSchema).optional(),
    _max: z.lazy(() => NestedEnumTERTIARY_TOGGLEFilterSchema).optional()
}).strict();
export default EnumTERTIARY_TOGGLEWithAggregatesFilterSchema;
