import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CitationsGroupIncludeSchema } from '../inputTypeSchemas/CitationsGroupIncludeSchema'
import { CitationsGroupWhereInputSchema } from '../inputTypeSchemas/CitationsGroupWhereInputSchema'
import { CitationsGroupOrderByWithRelationInputSchema } from '../inputTypeSchemas/CitationsGroupOrderByWithRelationInputSchema'
import { CitationsGroupWhereUniqueInputSchema } from '../inputTypeSchemas/CitationsGroupWhereUniqueInputSchema'
import { CitationsGroupScalarFieldEnumSchema } from '../inputTypeSchemas/CitationsGroupScalarFieldEnumSchema'
import { BibEntryFindManyArgsSchema } from "../outputTypeSchemas/BibEntryFindManyArgsSchema"
import { CitationsGroupCountOutputTypeArgsSchema } from "../outputTypeSchemas/CitationsGroupCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const CitationsGroupSelectSchema: z.ZodType<Prisma.CitationsGroupSelect> = z.object({
  name: z.boolean().optional(),
  description: z.boolean().optional(),
  entries: z.union([z.boolean(),z.lazy(() => BibEntryFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => CitationsGroupCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const CitationsGroupFindFirstOrThrowArgsSchema: z.ZodType<Prisma.CitationsGroupFindFirstOrThrowArgs> = z.object({
  select: CitationsGroupSelectSchema.optional(),
  include: CitationsGroupIncludeSchema.optional(),
  where: CitationsGroupWhereInputSchema.optional(),
  orderBy: z.union([ CitationsGroupOrderByWithRelationInputSchema.array(),CitationsGroupOrderByWithRelationInputSchema ]).optional(),
  cursor: CitationsGroupWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ CitationsGroupScalarFieldEnumSchema,CitationsGroupScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default CitationsGroupFindFirstOrThrowArgsSchema;
