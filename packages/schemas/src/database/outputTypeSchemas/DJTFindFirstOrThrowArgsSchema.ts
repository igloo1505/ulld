import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
..//inputTypeSchemas/DJTWhereInputSchema.js
..//inputTypeSchemas/DJTOrderByWithRelationInputSchema.js
..//inputTypeSchemas/DJTWhereUniqueInputSchema.js
..//inputTypeSchemas/DJTScalarFieldEnumSchema.js
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------
export const DJTSelectSchema: z.ZodType<Prisma.DJTSelect> = z.object({
  id: z.boolean().optional(),
  type: z.boolean().optional(),
  data: z.boolean().optional(),
}).strict()
export const DJTFindFirstOrThrowArgsSchema: z.ZodType<Prisma.DJTFindFirstOrThrowArgs> = z.object({
  select: DJTSelectSchema.optional(),
  where: DJTWhereInputSchema.optional(),
  orderBy: z.union([ DJTOrderByWithRelationInputSchema.array(),DJTOrderByWithRelationInputSchema ]).optional(),
  cursor: DJTWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ DJTScalarFieldEnumSchema,DJTScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;
export default DJTFindFirstOrThrowArgsSchema;