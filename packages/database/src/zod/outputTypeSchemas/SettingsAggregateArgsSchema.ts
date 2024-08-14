import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SettingsWhereInputSchema } from '../inputTypeSchemas/SettingsWhereInputSchema'
import { SettingsOrderByWithRelationInputSchema } from '../inputTypeSchemas/SettingsOrderByWithRelationInputSchema'
import { SettingsWhereUniqueInputSchema } from '../inputTypeSchemas/SettingsWhereUniqueInputSchema'

export const SettingsAggregateArgsSchema: z.ZodType<Prisma.SettingsAggregateArgs> = z.object({
  where: SettingsWhereInputSchema.optional(),
  orderBy: z.union([ SettingsOrderByWithRelationInputSchema.array(),SettingsOrderByWithRelationInputSchema ]).optional(),
  cursor: SettingsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default SettingsAggregateArgsSchema;
