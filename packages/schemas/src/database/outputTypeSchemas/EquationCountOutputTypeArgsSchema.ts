import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
import { EquationCountOutputTypeSelectSchema } from './EquationCountOutputTypeSelectSchema.js';
export const EquationCountOutputTypeArgsSchema: z.ZodType<Prisma.EquationCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => EquationCountOutputTypeSelectSchema).nullish(),
}).strict();
export default EquationCountOutputTypeSelectSchema;