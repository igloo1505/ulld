import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
export const BusinessContactUncheckedCreateInputSchema: z.ZodType<Prisma.BusinessContactUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  companyName: z.string(),
  contactName: z.string(),
  contactPreference: z.string(),
  email: z.string().optional().nullable(),
  phone: z.string().optional().nullable(),
  message: z.string(),
  purpose: z.string().optional().nullable()
}).strict();
export default BusinessContactUncheckedCreateInputSchema;