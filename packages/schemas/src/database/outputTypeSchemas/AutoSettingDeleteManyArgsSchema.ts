import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
import { AutoSettingWhereInputSchema } from '../inputTypeSchemas/AutoSettingWhereInputSchema.js'
export const AutoSettingDeleteManyArgsSchema: z.ZodType<Prisma.AutoSettingDeleteManyArgs> = z.object({
  where: AutoSettingWhereInputSchema.optional(),
}).strict() ;
export default AutoSettingDeleteManyArgsSchema;