import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SettingsAppendixUpdateManyMutationInputSchema } from '../inputTypeSchemas/SettingsAppendixUpdateManyMutationInputSchema'
import { SettingsAppendixUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/SettingsAppendixUncheckedUpdateManyInputSchema'
import { SettingsAppendixWhereInputSchema } from '../inputTypeSchemas/SettingsAppendixWhereInputSchema'

export const SettingsAppendixUpdateManyArgsSchema: z.ZodType<Prisma.SettingsAppendixUpdateManyArgs> = z.object({
  data: z.union([ SettingsAppendixUpdateManyMutationInputSchema,SettingsAppendixUncheckedUpdateManyInputSchema ]),
  where: SettingsAppendixWhereInputSchema.optional(),
}).strict() ;

export default SettingsAppendixUpdateManyArgsSchema;
