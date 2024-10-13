import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
..//inputTypeSchemas/SubjectSelectSchema.js
..//inputTypeSchemas/SubjectIncludeSchema.js
export const SubjectArgsSchema: z.ZodType<Prisma.SubjectDefaultArgs> = z.object({
  select: z.lazy(() => SubjectSelectSchema).optional(),
  include: z.lazy(() => SubjectIncludeSchema).optional(),
}).strict();
export default SubjectArgsSchema;