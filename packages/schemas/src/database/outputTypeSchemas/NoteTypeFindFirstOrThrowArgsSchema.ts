import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { NoteTypeWhereInputSchema } from '../inputTypeSchemas/NoteTypeWhereInputSchema'
import { NoteTypeOrderByWithRelationInputSchema } from '../inputTypeSchemas/NoteTypeOrderByWithRelationInputSchema'
import { NoteTypeWhereUniqueInputSchema } from '../inputTypeSchemas/NoteTypeWhereUniqueInputSchema'
import { NoteTypeScalarFieldEnumSchema } from '../inputTypeSchemas/NoteTypeScalarFieldEnumSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const NoteTypeSelectSchema: z.ZodType<Prisma.NoteTypeSelect> = z.object({
  name: z.boolean().optional(),
}).strict()

export const NoteTypeFindFirstOrThrowArgsSchema: z.ZodType<Prisma.NoteTypeFindFirstOrThrowArgs> = z.object({
  select: NoteTypeSelectSchema.optional(),
  where: NoteTypeWhereInputSchema.optional(),
  orderBy: z.union([ NoteTypeOrderByWithRelationInputSchema.array(),NoteTypeOrderByWithRelationInputSchema ]).optional(),
  cursor: NoteTypeWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ NoteTypeScalarFieldEnumSchema,NoteTypeScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default NoteTypeFindFirstOrThrowArgsSchema;
