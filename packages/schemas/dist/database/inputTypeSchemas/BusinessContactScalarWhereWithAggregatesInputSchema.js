import { z } from 'zod';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema.js';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema.js';
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema.js';
export const BusinessContactScalarWhereWithAggregatesInputSchema = z.object({
    AND: z.union([z.lazy(() => BusinessContactScalarWhereWithAggregatesInputSchema), z.lazy(() => BusinessContactScalarWhereWithAggregatesInputSchema).array()]).optional(),
    OR: z.lazy(() => BusinessContactScalarWhereWithAggregatesInputSchema).array().optional(),
    NOT: z.union([z.lazy(() => BusinessContactScalarWhereWithAggregatesInputSchema), z.lazy(() => BusinessContactScalarWhereWithAggregatesInputSchema).array()]).optional(),
    id: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
    companyName: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
    contactName: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
    contactPreference: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
    email: z.union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()]).optional().nullable(),
    phone: z.union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()]).optional().nullable(),
    message: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
    purpose: z.union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()]).optional().nullable(),
}).strict();
export default BusinessContactScalarWhereWithAggregatesInputSchema;
