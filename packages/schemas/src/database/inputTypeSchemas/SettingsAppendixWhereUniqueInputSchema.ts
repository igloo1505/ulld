import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SettingsAppendixWhereInputSchema } from './SettingsAppendixWhereInputSchema';
import { BytesFilterSchema } from './BytesFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const SettingsAppendixWhereUniqueInputSchema: z.ZodType<Prisma.SettingsAppendixWhereUniqueInput> = z.object({
  id: z.string()
})
.and(z.object({
  id: z.string().optional(),
  AND: z.union([ z.lazy(() => SettingsAppendixWhereInputSchema),z.lazy(() => SettingsAppendixWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => SettingsAppendixWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SettingsAppendixWhereInputSchema),z.lazy(() => SettingsAppendixWhereInputSchema).array() ]).optional(),
  data: z.union([ z.lazy(() => BytesFilterSchema),z.instanceof(Buffer) ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict());

export default SettingsAppendixWhereUniqueInputSchema;
