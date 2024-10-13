import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
..//inputTypeSchemas/SettingsAppendixUpdateManyMutationInputSchema.js
..//inputTypeSchemas/SettingsAppendixUncheckedUpdateManyInputSchema.js
..//inputTypeSchemas/SettingsAppendixWhereInputSchema.js
export const SettingsAppendixUpdateManyArgsSchema: z.ZodType<Prisma.SettingsAppendixUpdateManyArgs> = z.object({
  data: z.union([ SettingsAppendixUpdateManyMutationInputSchema,SettingsAppendixUncheckedUpdateManyInputSchema ]),
  where: SettingsAppendixWhereInputSchema.optional(),
}).strict() ;
export default SettingsAppendixUpdateManyArgsSchema;