import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
import { SubjectUpdateManyMutationInputSchema } from '../inputTypeSchemas/SubjectUpdateManyMutationInputSchema.js'
import { SubjectUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/SubjectUncheckedUpdateManyInputSchema.js'
import { SubjectWhereInputSchema } from '../inputTypeSchemas/SubjectWhereInputSchema.js'
export const SubjectUpdateManyArgsSchema: z.ZodType<Prisma.SubjectUpdateManyArgs> = z.object({
  data: z.union([ SubjectUpdateManyMutationInputSchema,SubjectUncheckedUpdateManyInputSchema ]),
  where: SubjectWhereInputSchema.optional(),
}).strict() ;
export default SubjectUpdateManyArgsSchema;