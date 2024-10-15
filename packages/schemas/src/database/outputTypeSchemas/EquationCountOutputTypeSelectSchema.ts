import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
export const EquationCountOutputTypeSelectSchema: z.ZodType<Prisma.EquationCountOutputTypeSelect> = z.object({
  relatedValues: z.boolean().optional(),
  tags: z.boolean().optional(),
  topics: z.boolean().optional(),
  subjects: z.boolean().optional(),
  mdxNotes: z.boolean().optional(),
}).strict();
export default EquationCountOutputTypeSelectSchema;