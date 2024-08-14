import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DietaryItemSelectSchema } from '../inputTypeSchemas/DietaryItemSelectSchema';
import { DietaryItemIncludeSchema } from '../inputTypeSchemas/DietaryItemIncludeSchema';

export const DietaryItemArgsSchema: z.ZodType<Prisma.DietaryItemDefaultArgs> = z.object({
  select: z.lazy(() => DietaryItemSelectSchema).optional(),
  include: z.lazy(() => DietaryItemIncludeSchema).optional(),
}).strict();

export default DietaryItemArgsSchema;
