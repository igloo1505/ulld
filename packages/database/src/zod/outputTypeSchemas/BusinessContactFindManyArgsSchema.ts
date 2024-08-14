import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BusinessContactWhereInputSchema } from '../inputTypeSchemas/BusinessContactWhereInputSchema'
import { BusinessContactOrderByWithRelationInputSchema } from '../inputTypeSchemas/BusinessContactOrderByWithRelationInputSchema'
import { BusinessContactWhereUniqueInputSchema } from '../inputTypeSchemas/BusinessContactWhereUniqueInputSchema'
import { BusinessContactScalarFieldEnumSchema } from '../inputTypeSchemas/BusinessContactScalarFieldEnumSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const BusinessContactSelectSchema: z.ZodType<Prisma.BusinessContactSelect> = z.object({
  id: z.boolean().optional(),
  companyName: z.boolean().optional(),
  contactName: z.boolean().optional(),
  contactPreference: z.boolean().optional(),
  email: z.boolean().optional(),
  phone: z.boolean().optional(),
  message: z.boolean().optional(),
  purpose: z.boolean().optional(),
}).strict()

export const BusinessContactFindManyArgsSchema: z.ZodType<Prisma.BusinessContactFindManyArgs> = z.object({
  select: BusinessContactSelectSchema.optional(),
  where: BusinessContactWhereInputSchema.optional(),
  orderBy: z.union([ BusinessContactOrderByWithRelationInputSchema.array(),BusinessContactOrderByWithRelationInputSchema ]).optional(),
  cursor: BusinessContactWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ BusinessContactScalarFieldEnumSchema,BusinessContactScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default BusinessContactFindManyArgsSchema;
