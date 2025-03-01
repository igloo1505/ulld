import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
import { RelatedValuesIncludeSchema } from '../inputTypeSchemas/RelatedValuesIncludeSchema.js'
import { RelatedValuesCreateInputSchema } from '../inputTypeSchemas/RelatedValuesCreateInputSchema.js'
import { RelatedValuesUncheckedCreateInputSchema } from '../inputTypeSchemas/RelatedValuesUncheckedCreateInputSchema.js'
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
export const RelatedValuesCreateArgsSchema: z.ZodType<Prisma.RelatedValuesCreateArgs> = z.object({
  select: RelatedValuesSelectSchema.optional(),
  include: RelatedValuesIncludeSchema.optional(),
  data: z.union([ RelatedValuesCreateInputSchema,RelatedValuesUncheckedCreateInputSchema ]),
}).strict() ;
export default RelatedValuesCreateArgsSchema;