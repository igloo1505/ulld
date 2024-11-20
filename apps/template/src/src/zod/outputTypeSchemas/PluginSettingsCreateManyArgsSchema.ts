import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PluginSettingsCreateManyInputSchema } from '../inputTypeSchemas/PluginSettingsCreateManyInputSchema'

export const PluginSettingsCreateManyArgsSchema: z.ZodType<Prisma.PluginSettingsCreateManyArgs> = z.object({
  data: z.union([ PluginSettingsCreateManyInputSchema,PluginSettingsCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default PluginSettingsCreateManyArgsSchema;
