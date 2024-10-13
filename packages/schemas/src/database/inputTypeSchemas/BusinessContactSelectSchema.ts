import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
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
export default BusinessContactSelectSchema;