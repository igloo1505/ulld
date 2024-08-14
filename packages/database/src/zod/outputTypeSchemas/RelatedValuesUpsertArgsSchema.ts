import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RelatedValuesIncludeSchema } from '../inputTypeSchemas/RelatedValuesIncludeSchema'
import { RelatedValuesWhereUniqueInputSchema } from '../inputTypeSchemas/RelatedValuesWhereUniqueInputSchema'
import { RelatedValuesCreateInputSchema } from '../inputTypeSchemas/RelatedValuesCreateInputSchema'
import { RelatedValuesUncheckedCreateInputSchema } from '../inputTypeSchemas/RelatedValuesUncheckedCreateInputSchema'
import { RelatedValuesUpdateInputSchema } from '../inputTypeSchemas/RelatedValuesUpdateInputSchema'
import { RelatedValuesUncheckedUpdateInputSchema } from '../inputTypeSchemas/RelatedValuesUncheckedUpdateInputSchema'
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

export const RelatedValuesUpsertArgsSchema: z.ZodType<Prisma.RelatedValuesUpsertArgs> = z.object({
  select: RelatedValuesSelectSchema.optional(),
  include: RelatedValuesIncludeSchema.optional(),
  where: RelatedValuesWhereUniqueInputSchema,
  create: z.union([ RelatedValuesCreateInputSchema,RelatedValuesUncheckedCreateInputSchema ]),
  update: z.union([ RelatedValuesUpdateInputSchema,RelatedValuesUncheckedUpdateInputSchema ]),
}).strict() ;

export default RelatedValuesUpsertArgsSchema;
