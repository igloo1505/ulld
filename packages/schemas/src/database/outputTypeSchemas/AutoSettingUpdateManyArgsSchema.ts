import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AutoSettingUpdateManyMutationInputSchema } from '../inputTypeSchemas/AutoSettingUpdateManyMutationInputSchema'
import { AutoSettingUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/AutoSettingUncheckedUpdateManyInputSchema'
import { AutoSettingWhereInputSchema } from '../inputTypeSchemas/AutoSettingWhereInputSchema'

export const AutoSettingUpdateManyArgsSchema: z.ZodType<Prisma.AutoSettingUpdateManyArgs> = z.object({
  data: z.union([ AutoSettingUpdateManyMutationInputSchema,AutoSettingUncheckedUpdateManyInputSchema ]),
  where: AutoSettingWhereInputSchema.optional(),
}).strict() ;

export default AutoSettingUpdateManyArgsSchema;
