import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { SortOrderSchema } from '../SortOrderSchema.js';
import { WaitlistRequestOrderByRelevanceInputSchema } from '../WaitlistRequestOrderByRelevanceInputSchema.js';
export const WaitlistRequestOrderByWithRelationInputSchema: z.ZodType<Prisma.WaitlistRequestOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  receivedOn: z.lazy(() => SortOrderSchema).optional(),
  emailsSent: z.lazy(() => SortOrderSchema).optional(),
  _relevance: z.lazy(() => WaitlistRequestOrderByRelevanceInputSchema).optional()
}).strict();
export default WaitlistRequestOrderByWithRelationInputSchema;