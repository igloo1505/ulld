import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EquationCountOutputTypeSelectSchema } from './EquationCountOutputTypeSelectSchema';

export const EquationCountOutputTypeArgsSchema: z.ZodType<Prisma.EquationCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => EquationCountOutputTypeSelectSchema).nullish(),
}).strict();

export default EquationCountOutputTypeSelectSchema;
