import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SettingsAppendixCreateManyInputSchema } from '../inputTypeSchemas/SettingsAppendixCreateManyInputSchema'

export const SettingsAppendixCreateManyArgsSchema: z.ZodType<Prisma.SettingsAppendixCreateManyArgs> = z.object({
  data: z.union([ SettingsAppendixCreateManyInputSchema,SettingsAppendixCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default SettingsAppendixCreateManyArgsSchema;
