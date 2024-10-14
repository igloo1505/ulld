import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SettingsAppendixWhereInputSchema } from '../inputTypeSchemas/SettingsAppendixWhereInputSchema'
import { SettingsAppendixOrderByWithRelationInputSchema } from '../inputTypeSchemas/SettingsAppendixOrderByWithRelationInputSchema'
import { SettingsAppendixWhereUniqueInputSchema } from '../inputTypeSchemas/SettingsAppendixWhereUniqueInputSchema'
import { SettingsAppendixScalarFieldEnumSchema } from '../inputTypeSchemas/SettingsAppendixScalarFieldEnumSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const SettingsAppendixSelectSchema: z.ZodType<Prisma.SettingsAppendixSelect> = z.object({
  id: z.boolean().optional(),
  data: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
}).strict()

export const SettingsAppendixFindFirstArgsSchema: z.ZodType<Prisma.SettingsAppendixFindFirstArgs> = z.object({
  select: SettingsAppendixSelectSchema.optional(),
  where: SettingsAppendixWhereInputSchema.optional(),
  orderBy: z.union([ SettingsAppendixOrderByWithRelationInputSchema.array(),SettingsAppendixOrderByWithRelationInputSchema ]).optional(),
  cursor: SettingsAppendixWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ SettingsAppendixScalarFieldEnumSchema,SettingsAppendixScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default SettingsAppendixFindFirstArgsSchema;
