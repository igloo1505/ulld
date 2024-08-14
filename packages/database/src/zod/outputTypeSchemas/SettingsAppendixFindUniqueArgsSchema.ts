import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SettingsAppendixWhereUniqueInputSchema } from '../inputTypeSchemas/SettingsAppendixWhereUniqueInputSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const SettingsAppendixSelectSchema: z.ZodType<Prisma.SettingsAppendixSelect> = z.object({
  id: z.boolean().optional(),
  data: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
}).strict()

export const SettingsAppendixFindUniqueArgsSchema: z.ZodType<Prisma.SettingsAppendixFindUniqueArgs> = z.object({
  select: SettingsAppendixSelectSchema.optional(),
  where: SettingsAppendixWhereUniqueInputSchema,
}).strict() ;

export default SettingsAppendixFindUniqueArgsSchema;
