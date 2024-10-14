import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RelatedValuesIncludeSchema } from '../inputTypeSchemas/RelatedValuesIncludeSchema'
import { RelatedValuesWhereInputSchema } from '../inputTypeSchemas/RelatedValuesWhereInputSchema'
import { RelatedValuesOrderByWithRelationInputSchema } from '../inputTypeSchemas/RelatedValuesOrderByWithRelationInputSchema'
import { RelatedValuesWhereUniqueInputSchema } from '../inputTypeSchemas/RelatedValuesWhereUniqueInputSchema'
import { RelatedValuesScalarFieldEnumSchema } from '../inputTypeSchemas/RelatedValuesScalarFieldEnumSchema'
import { EquationFindManyArgsSchema } from "../outputTypeSchemas/EquationFindManyArgsSchema"
import { RelatedValuesCountOutputTypeArgsSchema } from "../outputTypeSchemas/RelatedValuesCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const RelatedValuesSelectSchema: z.ZodType<Prisma.RelatedValuesSelect> = z.object({
  id: z.boolean().optional(),
  input: z.boolean().optional(),
  output: z.boolean().optional(),
  equationId: z.boolean().optional(),
  equations: z.union([z.boolean(),z.lazy(() => EquationFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => RelatedValuesCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const RelatedValuesFindFirstArgsSchema: z.ZodType<Prisma.RelatedValuesFindFirstArgs> = z.object({
  select: RelatedValuesSelectSchema.optional(),
  include: RelatedValuesIncludeSchema.optional(),
  where: RelatedValuesWhereInputSchema.optional(),
  orderBy: z.union([ RelatedValuesOrderByWithRelationInputSchema.array(),RelatedValuesOrderByWithRelationInputSchema ]).optional(),
  cursor: RelatedValuesWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ RelatedValuesScalarFieldEnumSchema,RelatedValuesScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default RelatedValuesFindFirstArgsSchema;
