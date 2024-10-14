import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AutoSettingWhereInputSchema } from '../inputTypeSchemas/AutoSettingWhereInputSchema'
import { AutoSettingOrderByWithRelationInputSchema } from '../inputTypeSchemas/AutoSettingOrderByWithRelationInputSchema'
import { AutoSettingWhereUniqueInputSchema } from '../inputTypeSchemas/AutoSettingWhereUniqueInputSchema'

export const AutoSettingAggregateArgsSchema: z.ZodType<Prisma.AutoSettingAggregateArgs> = z.object({
  where: AutoSettingWhereInputSchema.optional(),
  orderBy: z.union([ AutoSettingOrderByWithRelationInputSchema.array(),AutoSettingOrderByWithRelationInputSchema ]).optional(),
  cursor: AutoSettingWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default AutoSettingAggregateArgsSchema;
