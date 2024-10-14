import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { NoteTypeUpdateInputSchema } from '../inputTypeSchemas/NoteTypeUpdateInputSchema'
import { NoteTypeUncheckedUpdateInputSchema } from '../inputTypeSchemas/NoteTypeUncheckedUpdateInputSchema'
import { NoteTypeWhereUniqueInputSchema } from '../inputTypeSchemas/NoteTypeWhereUniqueInputSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const NoteTypeSelectSchema: z.ZodType<Prisma.NoteTypeSelect> = z.object({
  name: z.boolean().optional(),
}).strict()

export const NoteTypeUpdateArgsSchema: z.ZodType<Prisma.NoteTypeUpdateArgs> = z.object({
  select: NoteTypeSelectSchema.optional(),
  data: z.union([ NoteTypeUpdateInputSchema,NoteTypeUncheckedUpdateInputSchema ]),
  where: NoteTypeWhereUniqueInputSchema,
}).strict() ;

export default NoteTypeUpdateArgsSchema;
