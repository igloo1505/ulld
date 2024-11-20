import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WhiteboardWhereInputSchema } from './WhiteboardWhereInputSchema';
import { BytesFilterSchema } from './BytesFilterSchema';

export const WhiteboardWhereUniqueInputSchema: z.ZodType<Prisma.WhiteboardWhereUniqueInput> = z.object({
  id: z.string()
})
.and(z.object({
  id: z.string().optional(),
  AND: z.union([ z.lazy(() => WhiteboardWhereInputSchema),z.lazy(() => WhiteboardWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => WhiteboardWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => WhiteboardWhereInputSchema),z.lazy(() => WhiteboardWhereInputSchema).array() ]).optional(),
  data: z.union([ z.lazy(() => BytesFilterSchema),z.instanceof(Buffer) ]).optional(),
}).strict());

export default WhiteboardWhereUniqueInputSchema;
