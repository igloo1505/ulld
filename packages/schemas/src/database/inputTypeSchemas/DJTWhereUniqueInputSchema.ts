import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { DJTWhereInputSchema } from '../DJTWhereInputSchema.js';
import { StringFilterSchema } from '../StringFilterSchema.js';
import { BytesFilterSchema } from '../BytesFilterSchema.js';
export const DJTWhereUniqueInputSchema: z.ZodType<Prisma.DJTWhereUniqueInput> = z.object({
  id: z.number().int()
})
.and(z.object({
  id: z.number().int().optional(),
  AND: z.union([ z.lazy(() => DJTWhereInputSchema),z.lazy(() => DJTWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => DJTWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => DJTWhereInputSchema),z.lazy(() => DJTWhereInputSchema).array() ]).optional(),
  type: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  data: z.union([ z.lazy(() => BytesFilterSchema),z.instanceof(Buffer) ]).optional(),
}).strict());
export default DJTWhereUniqueInputSchema;