import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SettingsAppendixCreateManyInputSchema } from '../inputTypeSchemas/SettingsAppendixCreateManyInputSchema'

export const SettingsAppendixCreateManyAndReturnArgsSchema: z.ZodType<Prisma.SettingsAppendixCreateManyAndReturnArgs> = z.object({
  data: z.union([ SettingsAppendixCreateManyInputSchema,SettingsAppendixCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default SettingsAppendixCreateManyAndReturnArgsSchema;
