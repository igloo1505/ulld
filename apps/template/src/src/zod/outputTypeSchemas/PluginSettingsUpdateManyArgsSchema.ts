import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PluginSettingsUpdateManyMutationInputSchema } from '../inputTypeSchemas/PluginSettingsUpdateManyMutationInputSchema'
import { PluginSettingsUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/PluginSettingsUncheckedUpdateManyInputSchema'
import { PluginSettingsWhereInputSchema } from '../inputTypeSchemas/PluginSettingsWhereInputSchema'

export const PluginSettingsUpdateManyArgsSchema: z.ZodType<Prisma.PluginSettingsUpdateManyArgs> = z.object({
  data: z.union([ PluginSettingsUpdateManyMutationInputSchema,PluginSettingsUncheckedUpdateManyInputSchema ]),
  where: PluginSettingsWhereInputSchema.optional(),
}).strict() ;

export default PluginSettingsUpdateManyArgsSchema;
