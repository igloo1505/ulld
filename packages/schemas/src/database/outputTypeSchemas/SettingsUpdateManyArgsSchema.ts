import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
import { SettingsUpdateManyMutationInputSchema } from '../inputTypeSchemas/SettingsUpdateManyMutationInputSchema.js'
import { SettingsUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/SettingsUncheckedUpdateManyInputSchema.js'
import { SettingsWhereInputSchema } from '../inputTypeSchemas/SettingsWhereInputSchema.js'
export const SettingsUpdateManyArgsSchema: z.ZodType<Prisma.SettingsUpdateManyArgs> = z.object({
  data: z.union([ SettingsUpdateManyMutationInputSchema,SettingsUncheckedUpdateManyInputSchema ]),
  where: SettingsWhereInputSchema.optional(),
}).strict() ;
export default SettingsUpdateManyArgsSchema;