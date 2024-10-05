import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { NoteTypeCreateInputSchema } from '../inputTypeSchemas/NoteTypeCreateInputSchema'
import { NoteTypeUncheckedCreateInputSchema } from '../inputTypeSchemas/NoteTypeUncheckedCreateInputSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const NoteTypeSelectSchema: z.ZodType<Prisma.NoteTypeSelect> = z.object({
  name: z.boolean().optional(),
}).strict()

export const NoteTypeCreateArgsSchema: z.ZodType<Prisma.NoteTypeCreateArgs> = z.object({
  select: NoteTypeSelectSchema.optional(),
  data: z.union([ NoteTypeCreateInputSchema,NoteTypeUncheckedCreateInputSchema ]),
}).strict() ;

export default NoteTypeCreateArgsSchema;
