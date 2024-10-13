import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
..//inputTypeSchemas/DietaryItemSelectSchema.js
..//inputTypeSchemas/DietaryItemIncludeSchema.js
export const DietaryItemArgsSchema: z.ZodType<Prisma.DietaryItemDefaultArgs> = z.object({
  select: z.lazy(() => DietaryItemSelectSchema).optional(),
  include: z.lazy(() => DietaryItemIncludeSchema).optional(),
}).strict();
export default DietaryItemArgsSchema;