import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
..//inputTypeSchemas/BusinessContactWhereUniqueInputSchema.js
..//inputTypeSchemas/BusinessContactCreateInputSchema.js
..//inputTypeSchemas/BusinessContactUncheckedCreateInputSchema.js
..//inputTypeSchemas/BusinessContactUpdateInputSchema.js
..//inputTypeSchemas/BusinessContactUncheckedUpdateInputSchema.js
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