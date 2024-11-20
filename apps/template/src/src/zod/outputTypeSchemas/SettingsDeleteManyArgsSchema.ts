import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SettingsWhereInputSchema } from '../inputTypeSchemas/SettingsWhereInputSchema'

export const SettingsDeleteManyArgsSchema: z.ZodType<Prisma.SettingsDeleteManyArgs> = z.object({
  where: SettingsWhereInputSchema.optional(),
}).strict() ;

export default SettingsDeleteManyArgsSchema;
