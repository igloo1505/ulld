import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SubjectUpdateManyMutationInputSchema } from '../inputTypeSchemas/SubjectUpdateManyMutationInputSchema'
import { SubjectUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/SubjectUncheckedUpdateManyInputSchema'
import { SubjectWhereInputSchema } from '../inputTypeSchemas/SubjectWhereInputSchema'

export const SubjectUpdateManyArgsSchema: z.ZodType<Prisma.SubjectUpdateManyArgs> = z.object({
  data: z.union([ SubjectUpdateManyMutationInputSchema,SubjectUncheckedUpdateManyInputSchema ]),
  where: SubjectWhereInputSchema.optional(),
}).strict() ;

export default SubjectUpdateManyArgsSchema;
