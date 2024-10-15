import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { NestedBytesFilterSchema } from './NestedBytesFilterSchema.js';
export const BytesFilterSchema: z.ZodType<Prisma.BytesFilter> = z.object({
  equals: z.instanceof(Buffer).optional(),
  in: z.instanceof(Buffer).array().optional(),
  notIn: z.instanceof(Buffer).array().optional(),
  not: z.union([ z.instanceof(Buffer),z.lazy(() => NestedBytesFilterSchema) ]).optional(),
}).strict();
export default BytesFilterSchema;