import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SubjectWhereInputSchema } from '../inputTypeSchemas/SubjectWhereInputSchema'
import { SubjectOrderByWithRelationInputSchema } from '../inputTypeSchemas/SubjectOrderByWithRelationInputSchema'
import { SubjectWhereUniqueInputSchema } from '../inputTypeSchemas/SubjectWhereUniqueInputSchema'

export const SubjectAggregateArgsSchema: z.ZodType<Prisma.SubjectAggregateArgs> = z.object({
  where: SubjectWhereInputSchema.optional(),
  orderBy: z.union([ SubjectOrderByWithRelationInputSchema.array(),SubjectOrderByWithRelationInputSchema ]).optional(),
  cursor: SubjectWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default SubjectAggregateArgsSchema;
