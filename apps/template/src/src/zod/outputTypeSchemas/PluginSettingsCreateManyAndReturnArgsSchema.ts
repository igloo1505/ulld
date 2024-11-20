import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PluginSettingsCreateManyInputSchema } from '../inputTypeSchemas/PluginSettingsCreateManyInputSchema'

export const PluginSettingsCreateManyAndReturnArgsSchema: z.ZodType<Prisma.PluginSettingsCreateManyAndReturnArgs> = z.object({
  data: z.union([ PluginSettingsCreateManyInputSchema,PluginSettingsCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default PluginSettingsCreateManyAndReturnArgsSchema;
