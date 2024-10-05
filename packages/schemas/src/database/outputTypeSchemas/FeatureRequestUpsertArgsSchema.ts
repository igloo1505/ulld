import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { FeatureRequestWhereUniqueInputSchema } from '../inputTypeSchemas/FeatureRequestWhereUniqueInputSchema'
import { FeatureRequestCreateInputSchema } from '../inputTypeSchemas/FeatureRequestCreateInputSchema'
import { FeatureRequestUncheckedCreateInputSchema } from '../inputTypeSchemas/FeatureRequestUncheckedCreateInputSchema'
import { FeatureRequestUpdateInputSchema } from '../inputTypeSchemas/FeatureRequestUpdateInputSchema'
import { FeatureRequestUncheckedUpdateInputSchema } from '../inputTypeSchemas/FeatureRequestUncheckedUpdateInputSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const FeatureRequestSelectSchema: z.ZodType<Prisma.FeatureRequestSelect> = z.object({
  id: z.boolean().optional(),
  email: z.boolean().optional(),
  message: z.boolean().optional(),
  category: z.boolean().optional(),
  userBase: z.boolean().optional(),
  receivedOn: z.boolean().optional(),
}).strict()

export const FeatureRequestUpsertArgsSchema: z.ZodType<Prisma.FeatureRequestUpsertArgs> = z.object({
  select: FeatureRequestSelectSchema.optional(),
  where: FeatureRequestWhereUniqueInputSchema,
  create: z.union([ FeatureRequestCreateInputSchema,FeatureRequestUncheckedCreateInputSchema ]),
  update: z.union([ FeatureRequestUpdateInputSchema,FeatureRequestUncheckedUpdateInputSchema ]),
}).strict() ;

export default FeatureRequestUpsertArgsSchema;
