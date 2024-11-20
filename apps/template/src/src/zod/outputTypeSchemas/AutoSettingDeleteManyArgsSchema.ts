import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AutoSettingWhereInputSchema } from '../inputTypeSchemas/AutoSettingWhereInputSchema'

export const AutoSettingDeleteManyArgsSchema: z.ZodType<Prisma.AutoSettingDeleteManyArgs> = z.object({
  where: AutoSettingWhereInputSchema.optional(),
}).strict() ;

export default AutoSettingDeleteManyArgsSchema;
