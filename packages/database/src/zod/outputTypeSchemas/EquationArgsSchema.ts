import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EquationSelectSchema } from '../inputTypeSchemas/EquationSelectSchema';
import { EquationIncludeSchema } from '../inputTypeSchemas/EquationIncludeSchema';

export const EquationArgsSchema: z.ZodType<Prisma.EquationDefaultArgs> = z.object({
  select: z.lazy(() => EquationSelectSchema).optional(),
  include: z.lazy(() => EquationIncludeSchema).optional(),
}).strict();

export default EquationArgsSchema;
