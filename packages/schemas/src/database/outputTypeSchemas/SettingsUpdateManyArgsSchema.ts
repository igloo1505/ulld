import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
..//inputTypeSchemas/SettingsUpdateManyMutationInputSchema.js
..//inputTypeSchemas/SettingsUncheckedUpdateManyInputSchema.js
..//inputTypeSchemas/SettingsWhereInputSchema.js
export const SettingsUpdateManyArgsSchema: z.ZodType<Prisma.SettingsUpdateManyArgs> = z.object({
  data: z.union([ SettingsUpdateManyMutationInputSchema,SettingsUncheckedUpdateManyInputSchema ]),
  where: SettingsWhereInputSchema.optional(),
}).strict() ;
export default SettingsUpdateManyArgsSchema;