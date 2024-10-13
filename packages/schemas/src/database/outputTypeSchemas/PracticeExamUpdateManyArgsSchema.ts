import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
..//inputTypeSchemas/PracticeExamUpdateManyMutationInputSchema.js
..//inputTypeSchemas/PracticeExamUncheckedUpdateManyInputSchema.js
..//inputTypeSchemas/PracticeExamWhereInputSchema.js
export const PracticeExamUpdateManyArgsSchema: z.ZodType<Prisma.PracticeExamUpdateManyArgs> = z.object({
  data: z.union([ PracticeExamUpdateManyMutationInputSchema,PracticeExamUncheckedUpdateManyInputSchema ]),
  where: PracticeExamWhereInputSchema.optional(),
}).strict() ;
export default PracticeExamUpdateManyArgsSchema;