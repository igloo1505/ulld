import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const WaitlistRequestWhereInputSchema: z.ZodType<Prisma.WaitlistRequestWhereInput> = z.object({
  AND: z.union([ z.lazy(() => WaitlistRequestWhereInputSchema),z.lazy(() => WaitlistRequestWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => WaitlistRequestWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => WaitlistRequestWhereInputSchema),z.lazy(() => WaitlistRequestWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  email: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  receivedOn: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  emailsSent: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
}).strict();

export default WaitlistRequestWhereInputSchema;
