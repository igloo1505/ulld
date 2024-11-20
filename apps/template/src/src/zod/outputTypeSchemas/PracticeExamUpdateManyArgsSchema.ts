import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PracticeExamUpdateManyMutationInputSchema } from '../inputTypeSchemas/PracticeExamUpdateManyMutationInputSchema'
import { PracticeExamUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/PracticeExamUncheckedUpdateManyInputSchema'
import { PracticeExamWhereInputSchema } from '../inputTypeSchemas/PracticeExamWhereInputSchema'

export const PracticeExamUpdateManyArgsSchema: z.ZodType<Prisma.PracticeExamUpdateManyArgs> = z.object({
  data: z.union([ PracticeExamUpdateManyMutationInputSchema,PracticeExamUncheckedUpdateManyInputSchema ]),
  where: PracticeExamWhereInputSchema.optional(),
}).strict() ;

export default PracticeExamUpdateManyArgsSchema;
