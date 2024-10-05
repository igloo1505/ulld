import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SubjectSelectSchema } from '../inputTypeSchemas/SubjectSelectSchema';
import { SubjectIncludeSchema } from '../inputTypeSchemas/SubjectIncludeSchema';

export const SubjectArgsSchema: z.ZodType<Prisma.SubjectDefaultArgs> = z.object({
  select: z.lazy(() => SubjectSelectSchema).optional(),
  include: z.lazy(() => SubjectIncludeSchema).optional(),
}).strict();

export default SubjectArgsSchema;
