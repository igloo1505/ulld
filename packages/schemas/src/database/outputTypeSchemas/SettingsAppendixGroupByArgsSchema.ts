import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SettingsAppendixWhereInputSchema } from '../inputTypeSchemas/SettingsAppendixWhereInputSchema'
import { SettingsAppendixOrderByWithAggregationInputSchema } from '../inputTypeSchemas/SettingsAppendixOrderByWithAggregationInputSchema'
import { SettingsAppendixScalarFieldEnumSchema } from '../inputTypeSchemas/SettingsAppendixScalarFieldEnumSchema'
import { SettingsAppendixScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/SettingsAppendixScalarWhereWithAggregatesInputSchema'

export const SettingsAppendixGroupByArgsSchema: z.ZodType<Prisma.SettingsAppendixGroupByArgs> = z.object({
  where: SettingsAppendixWhereInputSchema.optional(),
  orderBy: z.union([ SettingsAppendixOrderByWithAggregationInputSchema.array(),SettingsAppendixOrderByWithAggregationInputSchema ]).optional(),
  by: SettingsAppendixScalarFieldEnumSchema.array(),
  having: SettingsAppendixScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default SettingsAppendixGroupByArgsSchema;
