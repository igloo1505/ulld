import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
..//inputTypeSchemas/SettingsWhereInputSchema.js
export const SettingsDeleteManyArgsSchema: z.ZodType<Prisma.SettingsDeleteManyArgs> = z.object({
  where: SettingsWhereInputSchema.optional(),
}).strict() ;
export default SettingsDeleteManyArgsSchema;