import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
..//inputTypeSchemas/EquationSelectSchema.js
..//inputTypeSchemas/EquationIncludeSchema.js
export const EquationArgsSchema: z.ZodType<Prisma.EquationDefaultArgs> = z.object({
  select: z.lazy(() => EquationSelectSchema).optional(),
  include: z.lazy(() => EquationIncludeSchema).optional(),
}).strict();
export default EquationArgsSchema;