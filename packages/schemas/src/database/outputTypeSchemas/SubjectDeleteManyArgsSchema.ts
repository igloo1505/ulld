import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
import { SubjectWhereInputSchema } from '../inputTypeSchemas/SubjectWhereInputSchema.js'
export const SubjectDeleteManyArgsSchema: z.ZodType<Prisma.SubjectDeleteManyArgs> = z.object({
  where: SubjectWhereInputSchema.optional(),
}).strict() ;
export default SubjectDeleteManyArgsSchema;