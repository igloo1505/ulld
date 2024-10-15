import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema.js';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema.js';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema.js';
export const WaitlistRequestScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.WaitlistRequestScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => WaitlistRequestScalarWhereWithAggregatesInputSchema),z.lazy(() => WaitlistRequestScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => WaitlistRequestScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => WaitlistRequestScalarWhereWithAggregatesInputSchema),z.lazy(() => WaitlistRequestScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  email: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  receivedOn: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  emailsSent: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
}).strict();
export default WaitlistRequestScalarWhereWithAggregatesInputSchema;