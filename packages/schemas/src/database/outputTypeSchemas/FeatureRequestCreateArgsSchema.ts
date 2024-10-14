import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { FeatureRequestCreateInputSchema } from '../inputTypeSchemas/FeatureRequestCreateInputSchema'
import { FeatureRequestUncheckedCreateInputSchema } from '../inputTypeSchemas/FeatureRequestUncheckedCreateInputSchema'
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

export const FeatureRequestCreateArgsSchema: z.ZodType<Prisma.FeatureRequestCreateArgs> = z.object({
  select: FeatureRequestSelectSchema.optional(),
  data: z.union([ FeatureRequestCreateInputSchema,FeatureRequestUncheckedCreateInputSchema ]),
}).strict() ;

export default FeatureRequestCreateArgsSchema;
