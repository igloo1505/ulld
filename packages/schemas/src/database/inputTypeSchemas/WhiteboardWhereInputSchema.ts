import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema.js';
import { BytesFilterSchema } from './BytesFilterSchema.js';
export const WhiteboardWhereInputSchema: z.ZodType<Prisma.WhiteboardWhereInput> = z.object({
  AND: z.union([ z.lazy(() => WhiteboardWhereInputSchema),z.lazy(() => WhiteboardWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => WhiteboardWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => WhiteboardWhereInputSchema),z.lazy(() => WhiteboardWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  data: z.union([ z.lazy(() => BytesFilterSchema),z.instanceof(Buffer) ]).optional(),
}).strict();
export default WhiteboardWhereInputSchema;