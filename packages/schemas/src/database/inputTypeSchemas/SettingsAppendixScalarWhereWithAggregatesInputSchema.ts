import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { StringWithAggregatesFilterSchema } from '../StringWithAggregatesFilterSchema.js';
import { BytesWithAggregatesFilterSchema } from '../BytesWithAggregatesFilterSchema.js';
import { DateTimeWithAggregatesFilterSchema } from '../DateTimeWithAggregatesFilterSchema.js';
export const SettingsAppendixScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.SettingsAppendixScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => SettingsAppendixScalarWhereWithAggregatesInputSchema),z.lazy(() => SettingsAppendixScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => SettingsAppendixScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SettingsAppendixScalarWhereWithAggregatesInputSchema),z.lazy(() => SettingsAppendixScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  data: z.union([ z.lazy(() => BytesWithAggregatesFilterSchema),z.instanceof(Buffer) ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();
export default SettingsAppendixScalarWhereWithAggregatesInputSchema;