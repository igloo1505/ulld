import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DJTWhereInputSchema } from '../inputTypeSchemas/DJTWhereInputSchema'
import { DJTOrderByWithRelationInputSchema } from '../inputTypeSchemas/DJTOrderByWithRelationInputSchema'
import { DJTWhereUniqueInputSchema } from '../inputTypeSchemas/DJTWhereUniqueInputSchema'
import { DJTScalarFieldEnumSchema } from '../inputTypeSchemas/DJTScalarFieldEnumSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const DJTSelectSchema: z.ZodType<Prisma.DJTSelect> = z.object({
  id: z.boolean().optional(),
  type: z.boolean().optional(),
  data: z.boolean().optional(),
}).strict()

export const DJTFindManyArgsSchema: z.ZodType<Prisma.DJTFindManyArgs> = z.object({
  select: DJTSelectSchema.optional(),
  where: DJTWhereInputSchema.optional(),
  orderBy: z.union([ DJTOrderByWithRelationInputSchema.array(),DJTOrderByWithRelationInputSchema ]).optional(),
  cursor: DJTWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ DJTScalarFieldEnumSchema,DJTScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default DJTFindManyArgsSchema;
