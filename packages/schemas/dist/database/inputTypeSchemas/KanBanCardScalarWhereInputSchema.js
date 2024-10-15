import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema.js';
import { IntNullableFilterSchema } from './IntNullableFilterSchema.js';
import { StringNullableFilterSchema } from './StringNullableFilterSchema.js';
export const KanBanCardScalarWhereInputSchema = z.object({
    AND: z.union([z.lazy(() => KanBanCardScalarWhereInputSchema), z.lazy(() => KanBanCardScalarWhereInputSchema).array()]).optional(),
    OR: z.lazy(() => KanBanCardScalarWhereInputSchema).array().optional(),
    NOT: z.union([z.lazy(() => KanBanCardScalarWhereInputSchema), z.lazy(() => KanBanCardScalarWhereInputSchema).array()]).optional(),
    id: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
    listId: z.union([z.lazy(() => IntNullableFilterSchema), z.number()]).optional().nullable(),
    indexWithinList: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
    label: z.union([z.lazy(() => StringNullableFilterSchema), z.string()]).optional().nullable(),
    details: z.union([z.lazy(() => StringNullableFilterSchema), z.string()]).optional().nullable(),
}).strict();
export default KanBanCardScalarWhereInputSchema;
