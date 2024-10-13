import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
..//inputTypeSchemas/SubjectUpdateManyMutationInputSchema.js
..//inputTypeSchemas/SubjectUncheckedUpdateManyInputSchema.js
..//inputTypeSchemas/SubjectWhereInputSchema.js
export const SubjectUpdateManyArgsSchema: z.ZodType<Prisma.SubjectUpdateManyArgs> = z.object({
  data: z.union([ SubjectUpdateManyMutationInputSchema,SubjectUncheckedUpdateManyInputSchema ]),
  where: SubjectWhereInputSchema.optional(),
}).strict() ;
export default SubjectUpdateManyArgsSchema;