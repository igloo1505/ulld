import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema.js';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema.js';
import { BytesWithAggregatesFilterSchema } from './BytesWithAggregatesFilterSchema.js';
export const DJTScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.DJTScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => DJTScalarWhereWithAggregatesInputSchema),z.lazy(() => DJTScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => DJTScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => DJTScalarWhereWithAggregatesInputSchema),z.lazy(() => DJTScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  type: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  data: z.union([ z.lazy(() => BytesWithAggregatesFilterSchema),z.instanceof(Buffer) ]).optional(),
}).strict();
export default DJTScalarWhereWithAggregatesInputSchema;