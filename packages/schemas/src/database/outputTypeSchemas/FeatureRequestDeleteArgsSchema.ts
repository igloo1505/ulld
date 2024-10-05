import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { FeatureRequestWhereUniqueInputSchema } from '../inputTypeSchemas/FeatureRequestWhereUniqueInputSchema'
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

export const FeatureRequestDeleteArgsSchema: z.ZodType<Prisma.FeatureRequestDeleteArgs> = z.object({
  select: FeatureRequestSelectSchema.optional(),
  where: FeatureRequestWhereUniqueInputSchema,
}).strict() ;

export default FeatureRequestDeleteArgsSchema;
