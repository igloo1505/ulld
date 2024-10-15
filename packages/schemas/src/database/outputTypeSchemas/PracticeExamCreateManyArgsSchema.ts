import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
import { PracticeExamCreateManyInputSchema } from '../inputTypeSchemas/PracticeExamCreateManyInputSchema.js'
export const PracticeExamCreateManyArgsSchema: z.ZodType<Prisma.PracticeExamCreateManyArgs> = z.object({
  data: z.union([ PracticeExamCreateManyInputSchema,PracticeExamCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;
export default PracticeExamCreateManyArgsSchema;