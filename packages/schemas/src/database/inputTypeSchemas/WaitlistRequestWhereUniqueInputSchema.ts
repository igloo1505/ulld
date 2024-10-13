import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { WaitlistRequestWhereInputSchema } from '../WaitlistRequestWhereInputSchema.js';
import { StringFilterSchema } from '../StringFilterSchema.js';
import { DateTimeFilterSchema } from '../DateTimeFilterSchema.js';
import { IntFilterSchema } from '../IntFilterSchema.js';
export const WaitlistRequestWhereUniqueInputSchema: z.ZodType<Prisma.WaitlistRequestWhereUniqueInput> = z.object({
  id: z.number().int()
})
.and(z.object({
  id: z.number().int().optional(),
  AND: z.union([ z.lazy(() => WaitlistRequestWhereInputSchema),z.lazy(() => WaitlistRequestWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => WaitlistRequestWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => WaitlistRequestWhereInputSchema),z.lazy(() => WaitlistRequestWhereInputSchema).array() ]).optional(),
  email: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  receivedOn: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  emailsSent: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
}).strict());
export default WaitlistRequestWhereUniqueInputSchema;