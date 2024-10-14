import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SubjectCreateManyInputSchema } from '../inputTypeSchemas/SubjectCreateManyInputSchema'

export const SubjectCreateManyArgsSchema: z.ZodType<Prisma.SubjectCreateManyArgs> = z.object({
  data: z.union([ SubjectCreateManyInputSchema,SubjectCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default SubjectCreateManyArgsSchema;
