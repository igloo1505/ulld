import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DietaryItemWhereInputSchema } from '../inputTypeSchemas/DietaryItemWhereInputSchema'

export const DietaryItemDeleteManyArgsSchema: z.ZodType<Prisma.DietaryItemDeleteManyArgs> = z.object({
  where: DietaryItemWhereInputSchema.optional(),
}).strict() ;

export default DietaryItemDeleteManyArgsSchema;
