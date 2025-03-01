import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
export const EquationUpdatekeywordsInputSchema: z.ZodType<Prisma.EquationUpdatekeywordsInput> = z.object({
  set: z.string().array().optional(),
  push: z.union([ z.string(),z.string().array() ]).optional(),
}).strict();
export default EquationUpdatekeywordsInputSchema;