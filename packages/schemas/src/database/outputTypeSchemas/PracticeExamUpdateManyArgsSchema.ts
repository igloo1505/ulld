import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
import { PracticeExamUpdateManyMutationInputSchema } from '../inputTypeSchemas/PracticeExamUpdateManyMutationInputSchema.js'
import { PracticeExamUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/PracticeExamUncheckedUpdateManyInputSchema.js'
import { PracticeExamWhereInputSchema } from '../inputTypeSchemas/PracticeExamWhereInputSchema.js'
export const PracticeExamUpdateManyArgsSchema: z.ZodType<Prisma.PracticeExamUpdateManyArgs> = z.object({
  data: z.union([ PracticeExamUpdateManyMutationInputSchema,PracticeExamUncheckedUpdateManyInputSchema ]),
  where: PracticeExamWhereInputSchema.optional(),
}).strict() ;
export default PracticeExamUpdateManyArgsSchema;