import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BusinessContactWhereUniqueInputSchema } from '../inputTypeSchemas/BusinessContactWhereUniqueInputSchema'
import { BusinessContactCreateInputSchema } from '../inputTypeSchemas/BusinessContactCreateInputSchema'
import { BusinessContactUncheckedCreateInputSchema } from '../inputTypeSchemas/BusinessContactUncheckedCreateInputSchema'
import { BusinessContactUpdateInputSchema } from '../inputTypeSchemas/BusinessContactUpdateInputSchema'
import { BusinessContactUncheckedUpdateInputSchema } from '../inputTypeSchemas/BusinessContactUncheckedUpdateInputSchema'
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

export const BusinessContactUpsertArgsSchema: z.ZodType<Prisma.BusinessContactUpsertArgs> = z.object({
  select: BusinessContactSelectSchema.optional(),
  where: BusinessContactWhereUniqueInputSchema,
  create: z.union([ BusinessContactCreateInputSchema,BusinessContactUncheckedCreateInputSchema ]),
  update: z.union([ BusinessContactUpdateInputSchema,BusinessContactUncheckedUpdateInputSchema ]),
}).strict() ;

export default BusinessContactUpsertArgsSchema;
