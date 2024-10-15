import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema.js';
import { StringFilterSchema } from './StringFilterSchema.js';
import { BytesFilterSchema } from './BytesFilterSchema.js';
export const DJTWhereInputSchema: z.ZodType<Prisma.DJTWhereInput> = z.object({
  AND: z.union([ z.lazy(() => DJTWhereInputSchema),z.lazy(() => DJTWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => DJTWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => DJTWhereInputSchema),z.lazy(() => DJTWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  type: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  data: z.union([ z.lazy(() => BytesFilterSchema),z.instanceof(Buffer) ]).optional(),
}).strict();
export default DJTWhereInputSchema;