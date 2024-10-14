import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SettingsUpdateManyMutationInputSchema } from '../inputTypeSchemas/SettingsUpdateManyMutationInputSchema'
import { SettingsUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/SettingsUncheckedUpdateManyInputSchema'
import { SettingsWhereInputSchema } from '../inputTypeSchemas/SettingsWhereInputSchema'

export const SettingsUpdateManyArgsSchema: z.ZodType<Prisma.SettingsUpdateManyArgs> = z.object({
  data: z.union([ SettingsUpdateManyMutationInputSchema,SettingsUncheckedUpdateManyInputSchema ]),
  where: SettingsWhereInputSchema.optional(),
}).strict() ;

export default SettingsUpdateManyArgsSchema;
