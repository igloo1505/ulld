import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const BusinessContactCreateInputSchema: z.ZodType<Prisma.BusinessContactCreateInput> = z.object({
  companyName: z.string(),
  contactName: z.string(),
  contactPreference: z.string(),
  email: z.string().optional().nullable(),
  phone: z.string().optional().nullable(),
  message: z.string(),
  purpose: z.string().optional().nullable()
}).strict();

export default BusinessContactCreateInputSchema;
