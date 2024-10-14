import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
import { PracticeExamWhereInputSchema } from '../inputTypeSchemas/PracticeExamWhereInputSchema.js'
export const PracticeExamDeleteManyArgsSchema: z.ZodType<Prisma.PracticeExamDeleteManyArgs> = z.object({
  where: PracticeExamWhereInputSchema.optional(),
}).strict() ;
export default PracticeExamDeleteManyArgsSchema;