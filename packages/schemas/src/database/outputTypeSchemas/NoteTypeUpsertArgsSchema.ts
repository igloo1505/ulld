import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { NoteTypeWhereUniqueInputSchema } from '../inputTypeSchemas/NoteTypeWhereUniqueInputSchema'
import { NoteTypeCreateInputSchema } from '../inputTypeSchemas/NoteTypeCreateInputSchema'
import { NoteTypeUncheckedCreateInputSchema } from '../inputTypeSchemas/NoteTypeUncheckedCreateInputSchema'
import { NoteTypeUpdateInputSchema } from '../inputTypeSchemas/NoteTypeUpdateInputSchema'
import { NoteTypeUncheckedUpdateInputSchema } from '../inputTypeSchemas/NoteTypeUncheckedUpdateInputSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const NoteTypeSelectSchema: z.ZodType<Prisma.NoteTypeSelect> = z.object({
  name: z.boolean().optional(),
}).strict()

export const NoteTypeUpsertArgsSchema: z.ZodType<Prisma.NoteTypeUpsertArgs> = z.object({
  select: NoteTypeSelectSchema.optional(),
  where: NoteTypeWhereUniqueInputSchema,
  create: z.union([ NoteTypeCreateInputSchema,NoteTypeUncheckedCreateInputSchema ]),
  update: z.union([ NoteTypeUpdateInputSchema,NoteTypeUncheckedUpdateInputSchema ]),
}).strict() ;

export default NoteTypeUpsertArgsSchema;
