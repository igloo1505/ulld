import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PracticeExamCreateManyInputSchema } from '../inputTypeSchemas/PracticeExamCreateManyInputSchema'

export const PracticeExamCreateManyAndReturnArgsSchema: z.ZodType<Prisma.PracticeExamCreateManyAndReturnArgs> = z.object({
  data: z.union([ PracticeExamCreateManyInputSchema,PracticeExamCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default PracticeExamCreateManyAndReturnArgsSchema;
