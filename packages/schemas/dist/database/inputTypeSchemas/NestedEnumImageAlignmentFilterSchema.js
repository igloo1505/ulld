import { z } from 'zod';
import { ImageAlignmentSchema } from './ImageAlignmentSchema.js';
export const NestedEnumImageAlignmentFilterSchema = z.object({
    equals: z.lazy(() => ImageAlignmentSchema).optional(),
    in: z.lazy(() => ImageAlignmentSchema).array().optional(),
    notIn: z.lazy(() => ImageAlignmentSchema).array().optional(),
    not: z.union([z.lazy(() => ImageAlignmentSchema), z.lazy(() => NestedEnumImageAlignmentFilterSchema)]).optional(),
}).strict();
export default NestedEnumImageAlignmentFilterSchema;
