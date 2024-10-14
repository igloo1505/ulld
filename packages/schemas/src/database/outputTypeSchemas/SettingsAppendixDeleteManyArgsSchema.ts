import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
import { SettingsAppendixWhereInputSchema } from '../inputTypeSchemas/SettingsAppendixWhereInputSchema.js'
export const SettingsAppendixDeleteManyArgsSchema: z.ZodType<Prisma.SettingsAppendixDeleteManyArgs> = z.object({
  where: SettingsAppendixWhereInputSchema.optional(),
}).strict() ;
export default SettingsAppendixDeleteManyArgsSchema;