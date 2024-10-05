import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BusinessContactUpdateInputSchema } from '../inputTypeSchemas/BusinessContactUpdateInputSchema'
import { BusinessContactUncheckedUpdateInputSchema } from '../inputTypeSchemas/BusinessContactUncheckedUpdateInputSchema'
import { BusinessContactWhereUniqueInputSchema } from '../inputTypeSchemas/BusinessContactWhereUniqueInputSchema'
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

export const BusinessContactUpdateArgsSchema: z.ZodType<Prisma.BusinessContactUpdateArgs> = z.object({
  select: BusinessContactSelectSchema.optional(),
  data: z.union([ BusinessContactUpdateInputSchema,BusinessContactUncheckedUpdateInputSchema ]),
  where: BusinessContactWhereUniqueInputSchema,
}).strict() ;

export default BusinessContactUpdateArgsSchema;
