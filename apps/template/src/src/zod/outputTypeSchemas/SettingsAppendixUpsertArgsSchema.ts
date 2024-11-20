import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SettingsAppendixWhereUniqueInputSchema } from '../inputTypeSchemas/SettingsAppendixWhereUniqueInputSchema'
import { SettingsAppendixCreateInputSchema } from '../inputTypeSchemas/SettingsAppendixCreateInputSchema'
import { SettingsAppendixUncheckedCreateInputSchema } from '../inputTypeSchemas/SettingsAppendixUncheckedCreateInputSchema'
import { SettingsAppendixUpdateInputSchema } from '../inputTypeSchemas/SettingsAppendixUpdateInputSchema'
import { SettingsAppendixUncheckedUpdateInputSchema } from '../inputTypeSchemas/SettingsAppendixUncheckedUpdateInputSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const SettingsAppendixSelectSchema: z.ZodType<Prisma.SettingsAppendixSelect> = z.object({
  id: z.boolean().optional(),
  data: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
}).strict()

export const SettingsAppendixUpsertArgsSchema: z.ZodType<Prisma.SettingsAppendixUpsertArgs> = z.object({
  select: SettingsAppendixSelectSchema.optional(),
  where: SettingsAppendixWhereUniqueInputSchema,
  create: z.union([ SettingsAppendixCreateInputSchema,SettingsAppendixUncheckedCreateInputSchema ]),
  update: z.union([ SettingsAppendixUpdateInputSchema,SettingsAppendixUncheckedUpdateInputSchema ]),
}).strict() ;

export default SettingsAppendixUpsertArgsSchema;
