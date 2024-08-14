import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SubjectCreateManyInputSchema } from '../inputTypeSchemas/SubjectCreateManyInputSchema'

export const SubjectCreateManyAndReturnArgsSchema: z.ZodType<Prisma.SubjectCreateManyAndReturnArgs> = z.object({
  data: z.union([ SubjectCreateManyInputSchema,SubjectCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default SubjectCreateManyAndReturnArgsSchema;
