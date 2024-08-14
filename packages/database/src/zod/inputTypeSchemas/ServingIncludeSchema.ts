import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DietaryItemArgsSchema } from "../outputTypeSchemas/DietaryItemArgsSchema"

export const ServingIncludeSchema: z.ZodType<Prisma.ServingInclude> = z.object({
  item: z.union([z.boolean(),z.lazy(() => DietaryItemArgsSchema)]).optional(),
}).strict()

export default ServingIncludeSchema;
