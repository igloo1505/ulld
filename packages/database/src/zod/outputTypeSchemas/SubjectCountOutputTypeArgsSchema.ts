import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SubjectCountOutputTypeSelectSchema } from './SubjectCountOutputTypeSelectSchema';

export const SubjectCountOutputTypeArgsSchema: z.ZodType<Prisma.SubjectCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => SubjectCountOutputTypeSelectSchema).nullish(),
}).strict();

export default SubjectCountOutputTypeSelectSchema;
