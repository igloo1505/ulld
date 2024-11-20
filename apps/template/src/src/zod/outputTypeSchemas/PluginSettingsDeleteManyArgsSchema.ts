import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PluginSettingsWhereInputSchema } from '../inputTypeSchemas/PluginSettingsWhereInputSchema'

export const PluginSettingsDeleteManyArgsSchema: z.ZodType<Prisma.PluginSettingsDeleteManyArgs> = z.object({
  where: PluginSettingsWhereInputSchema.optional(),
}).strict() ;

export default PluginSettingsDeleteManyArgsSchema;
