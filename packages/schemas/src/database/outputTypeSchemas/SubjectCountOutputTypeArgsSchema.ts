import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
import { SubjectCountOutputTypeSelectSchema } from './SubjectCountOutputTypeSelectSchema.js';
export const SubjectCountOutputTypeArgsSchema: z.ZodType<Prisma.SubjectCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => SubjectCountOutputTypeSelectSchema).nullish(),
}).strict();
export default SubjectCountOutputTypeSelectSchema;