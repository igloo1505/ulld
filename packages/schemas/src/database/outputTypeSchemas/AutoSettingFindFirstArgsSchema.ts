import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AutoSettingWhereInputSchema } from '../inputTypeSchemas/AutoSettingWhereInputSchema'
import { AutoSettingOrderByWithRelationInputSchema } from '../inputTypeSchemas/AutoSettingOrderByWithRelationInputSchema'
import { AutoSettingWhereUniqueInputSchema } from '../inputTypeSchemas/AutoSettingWhereUniqueInputSchema'
import { AutoSettingScalarFieldEnumSchema } from '../inputTypeSchemas/AutoSettingScalarFieldEnumSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const AutoSettingSelectSchema: z.ZodType<Prisma.AutoSettingSelect> = z.object({
  id: z.boolean().optional(),
  type: z.boolean().optional(),
  glob: z.boolean().optional(),
  value: z.boolean().optional(),
}).strict()

export const AutoSettingFindFirstArgsSchema: z.ZodType<Prisma.AutoSettingFindFirstArgs> = z.object({
  select: AutoSettingSelectSchema.optional(),
  where: AutoSettingWhereInputSchema.optional(),
  orderBy: z.union([ AutoSettingOrderByWithRelationInputSchema.array(),AutoSettingOrderByWithRelationInputSchema ]).optional(),
  cursor: AutoSettingWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ AutoSettingScalarFieldEnumSchema,AutoSettingScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default AutoSettingFindFirstArgsSchema;
