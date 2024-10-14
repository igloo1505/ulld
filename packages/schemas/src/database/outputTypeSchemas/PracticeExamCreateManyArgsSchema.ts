import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PracticeExamCreateManyInputSchema } from '../inputTypeSchemas/PracticeExamCreateManyInputSchema'

export const PracticeExamCreateManyArgsSchema: z.ZodType<Prisma.PracticeExamCreateManyArgs> = z.object({
  data: z.union([ PracticeExamCreateManyInputSchema,PracticeExamCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default PracticeExamCreateManyArgsSchema;
