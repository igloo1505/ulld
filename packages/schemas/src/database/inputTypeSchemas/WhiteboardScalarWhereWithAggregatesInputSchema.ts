import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { BytesWithAggregatesFilterSchema } from './BytesWithAggregatesFilterSchema';

export const WhiteboardScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.WhiteboardScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => WhiteboardScalarWhereWithAggregatesInputSchema),z.lazy(() => WhiteboardScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => WhiteboardScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => WhiteboardScalarWhereWithAggregatesInputSchema),z.lazy(() => WhiteboardScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  data: z.union([ z.lazy(() => BytesWithAggregatesFilterSchema),z.instanceof(Buffer) ]).optional(),
}).strict();

export default WhiteboardScalarWhereWithAggregatesInputSchema;
