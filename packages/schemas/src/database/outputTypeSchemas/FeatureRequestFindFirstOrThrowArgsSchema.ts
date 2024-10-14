import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { FeatureRequestWhereInputSchema } from '../inputTypeSchemas/FeatureRequestWhereInputSchema'
import { FeatureRequestOrderByWithRelationInputSchema } from '../inputTypeSchemas/FeatureRequestOrderByWithRelationInputSchema'
import { FeatureRequestWhereUniqueInputSchema } from '../inputTypeSchemas/FeatureRequestWhereUniqueInputSchema'
import { FeatureRequestScalarFieldEnumSchema } from '../inputTypeSchemas/FeatureRequestScalarFieldEnumSchema'
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

export const FeatureRequestFindFirstOrThrowArgsSchema: z.ZodType<Prisma.FeatureRequestFindFirstOrThrowArgs> = z.object({
  select: FeatureRequestSelectSchema.optional(),
  where: FeatureRequestWhereInputSchema.optional(),
  orderBy: z.union([ FeatureRequestOrderByWithRelationInputSchema.array(),FeatureRequestOrderByWithRelationInputSchema ]).optional(),
  cursor: FeatureRequestWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ FeatureRequestScalarFieldEnumSchema,FeatureRequestScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default FeatureRequestFindFirstOrThrowArgsSchema;
