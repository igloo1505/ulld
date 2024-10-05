import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ServingSelectSchema } from '../inputTypeSchemas/ServingSelectSchema';
import { ServingIncludeSchema } from '../inputTypeSchemas/ServingIncludeSchema';

export const ServingArgsSchema: z.ZodType<Prisma.ServingDefaultArgs> = z.object({
  select: z.lazy(() => ServingSelectSchema).optional(),
  include: z.lazy(() => ServingIncludeSchema).optional(),
}).strict();

export default ServingArgsSchema;
