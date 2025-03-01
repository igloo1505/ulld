import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
import { DailyFocusWhereInputSchema } from '../inputTypeSchemas/DailyFocusWhereInputSchema.js'
import { DailyFocusOrderByWithRelationInputSchema } from '../inputTypeSchemas/DailyFocusOrderByWithRelationInputSchema.js'
import { DailyFocusWhereUniqueInputSchema } from '../inputTypeSchemas/DailyFocusWhereUniqueInputSchema.js'
import { DailyFocusScalarFieldEnumSchema } from '../inputTypeSchemas/DailyFocusScalarFieldEnumSchema.js'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------
export const DailyFocusSelectSchema: z.ZodType<Prisma.DailyFocusSelect> = z.object({
  value: z.boolean().optional(),
  createdAt: z.boolean().optional(),
}).strict()
export const DailyFocusFindFirstOrThrowArgsSchema: z.ZodType<Prisma.DailyFocusFindFirstOrThrowArgs> = z.object({
  select: DailyFocusSelectSchema.optional(),
  where: DailyFocusWhereInputSchema.optional(),
  orderBy: z.union([ DailyFocusOrderByWithRelationInputSchema.array(),DailyFocusOrderByWithRelationInputSchema ]).optional(),
  cursor: DailyFocusWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ DailyFocusScalarFieldEnumSchema,DailyFocusScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;
export default DailyFocusFindFirstOrThrowArgsSchema;