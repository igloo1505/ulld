import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
..//inputTypeSchemas/AutoSettingUpdateManyMutationInputSchema.js
..//inputTypeSchemas/AutoSettingUncheckedUpdateManyInputSchema.js
..//inputTypeSchemas/AutoSettingWhereInputSchema.js
export const AutoSettingUpdateManyArgsSchema: z.ZodType<Prisma.AutoSettingUpdateManyArgs> = z.object({
  data: z.union([ AutoSettingUpdateManyMutationInputSchema,AutoSettingUncheckedUpdateManyInputSchema ]),
  where: AutoSettingWhereInputSchema.optional(),
}).strict() ;
export default AutoSettingUpdateManyArgsSchema;