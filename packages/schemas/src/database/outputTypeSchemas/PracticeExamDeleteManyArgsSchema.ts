import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PracticeExamWhereInputSchema } from '../inputTypeSchemas/PracticeExamWhereInputSchema'

export const PracticeExamDeleteManyArgsSchema: z.ZodType<Prisma.PracticeExamDeleteManyArgs> = z.object({
  where: PracticeExamWhereInputSchema.optional(),
}).strict() ;

export default PracticeExamDeleteManyArgsSchema;
