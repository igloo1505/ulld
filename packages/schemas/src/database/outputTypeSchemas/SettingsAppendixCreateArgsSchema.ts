import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SettingsAppendixCreateInputSchema } from '../inputTypeSchemas/SettingsAppendixCreateInputSchema'
import { SettingsAppendixUncheckedCreateInputSchema } from '../inputTypeSchemas/SettingsAppendixUncheckedCreateInputSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const SettingsAppendixSelectSchema: z.ZodType<Prisma.SettingsAppendixSelect> = z.object({
  id: z.boolean().optional(),
  data: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
}).strict()

export const SettingsAppendixCreateArgsSchema: z.ZodType<Prisma.SettingsAppendixCreateArgs> = z.object({
  select: SettingsAppendixSelectSchema.optional(),
  data: z.union([ SettingsAppendixCreateInputSchema,SettingsAppendixUncheckedCreateInputSchema ]),
}).strict() ;

export default SettingsAppendixCreateArgsSchema;
