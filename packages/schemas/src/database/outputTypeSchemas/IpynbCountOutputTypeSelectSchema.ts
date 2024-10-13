import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
export const IpynbCountOutputTypeSelectSchema: z.ZodType<Prisma.IpynbCountOutputTypeSelect> = z.object({
  tags: z.boolean().optional(),
  topics: z.boolean().optional(),
  subjects: z.boolean().optional(),
  citations: z.boolean().optional(),
  readingList: z.boolean().optional(),
}).strict();
export default IpynbCountOutputTypeSelectSchema;