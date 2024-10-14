import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
import { SettingsAppendixUpdateManyMutationInputSchema } from '../inputTypeSchemas/SettingsAppendixUpdateManyMutationInputSchema.js'
import { SettingsAppendixUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/SettingsAppendixUncheckedUpdateManyInputSchema.js'
import { SettingsAppendixWhereInputSchema } from '../inputTypeSchemas/SettingsAppendixWhereInputSchema.js'
export const SettingsAppendixUpdateManyArgsSchema: z.ZodType<Prisma.SettingsAppendixUpdateManyArgs> = z.object({
  data: z.union([ SettingsAppendixUpdateManyMutationInputSchema,SettingsAppendixUncheckedUpdateManyInputSchema ]),
  where: SettingsAppendixWhereInputSchema.optional(),
}).strict() ;
export default SettingsAppendixUpdateManyArgsSchema;