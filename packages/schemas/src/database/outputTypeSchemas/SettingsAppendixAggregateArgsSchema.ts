import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SettingsAppendixWhereInputSchema } from '../inputTypeSchemas/SettingsAppendixWhereInputSchema'
import { SettingsAppendixOrderByWithRelationInputSchema } from '../inputTypeSchemas/SettingsAppendixOrderByWithRelationInputSchema'
import { SettingsAppendixWhereUniqueInputSchema } from '../inputTypeSchemas/SettingsAppendixWhereUniqueInputSchema'

export const SettingsAppendixAggregateArgsSchema: z.ZodType<Prisma.SettingsAppendixAggregateArgs> = z.object({
  where: SettingsAppendixWhereInputSchema.optional(),
  orderBy: z.union([ SettingsAppendixOrderByWithRelationInputSchema.array(),SettingsAppendixOrderByWithRelationInputSchema ]).optional(),
  cursor: SettingsAppendixWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default SettingsAppendixAggregateArgsSchema;
