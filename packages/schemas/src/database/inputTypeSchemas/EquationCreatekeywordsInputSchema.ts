import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const EquationCreatekeywordsInputSchema: z.ZodType<Prisma.EquationCreatekeywordsInput> = z.object({
  set: z.string().array()
}).strict();

export default EquationCreatekeywordsInputSchema;
