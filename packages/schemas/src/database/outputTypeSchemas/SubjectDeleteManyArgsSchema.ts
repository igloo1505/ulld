import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SubjectWhereInputSchema } from '../inputTypeSchemas/SubjectWhereInputSchema'

export const SubjectDeleteManyArgsSchema: z.ZodType<Prisma.SubjectDeleteManyArgs> = z.object({
  where: SubjectWhereInputSchema.optional(),
}).strict() ;

export default SubjectDeleteManyArgsSchema;
