import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
..//inputTypeSchemas/DailyFocusWhereInputSchema.js
..//inputTypeSchemas/DailyFocusOrderByWithRelationInputSchema.js
..//inputTypeSchemas/DailyFocusWhereUniqueInputSchema.js
..//inputTypeSchemas/DailyFocusScalarFieldEnumSchema.js
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------
export const DailyFocusSelectSchema: z.ZodType<Prisma.DailyFocusSelect> = z.object({
  value: z.boolean().optional(),
  createdAt: z.boolean().optional(),
}).strict()
export const DailyFocusFindFirstArgsSchema: z.ZodType<Prisma.DailyFocusFindFirstArgs> = z.object({
  select: DailyFocusSelectSchema.optional(),
  where: DailyFocusWhereInputSchema.optional(),
  orderBy: z.union([ DailyFocusOrderByWithRelationInputSchema.array(),DailyFocusOrderByWithRelationInputSchema ]).optional(),
  cursor: DailyFocusWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ DailyFocusScalarFieldEnumSchema,DailyFocusScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;
export default DailyFocusFindFirstArgsSchema;