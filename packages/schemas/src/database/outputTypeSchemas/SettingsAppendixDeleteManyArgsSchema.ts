import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SettingsAppendixWhereInputSchema } from '../inputTypeSchemas/SettingsAppendixWhereInputSchema'

export const SettingsAppendixDeleteManyArgsSchema: z.ZodType<Prisma.SettingsAppendixDeleteManyArgs> = z.object({
  where: SettingsAppendixWhereInputSchema.optional(),
}).strict() ;

export default SettingsAppendixDeleteManyArgsSchema;
