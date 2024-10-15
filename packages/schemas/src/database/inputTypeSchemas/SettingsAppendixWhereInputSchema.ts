import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema.js';
import { BytesFilterSchema } from './BytesFilterSchema.js';
import { DateTimeFilterSchema } from './DateTimeFilterSchema.js';
export const SettingsAppendixWhereInputSchema: z.ZodType<Prisma.SettingsAppendixWhereInput> = z.object({
  AND: z.union([ z.lazy(() => SettingsAppendixWhereInputSchema),z.lazy(() => SettingsAppendixWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => SettingsAppendixWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SettingsAppendixWhereInputSchema),z.lazy(() => SettingsAppendixWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  data: z.union([ z.lazy(() => BytesFilterSchema),z.instanceof(Buffer) ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();
export default SettingsAppendixWhereInputSchema;