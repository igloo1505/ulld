import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
import { PracticeExamCreateManyInputSchema } from '../inputTypeSchemas/PracticeExamCreateManyInputSchema.js'
export const PracticeExamCreateManyAndReturnArgsSchema: z.ZodType<Prisma.PracticeExamCreateManyAndReturnArgs> = z.object({
  data: z.union([ PracticeExamCreateManyInputSchema,PracticeExamCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;
export default PracticeExamCreateManyAndReturnArgsSchema;