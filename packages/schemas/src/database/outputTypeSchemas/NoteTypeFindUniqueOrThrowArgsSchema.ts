import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { NoteTypeWhereUniqueInputSchema } from '../inputTypeSchemas/NoteTypeWhereUniqueInputSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const NoteTypeSelectSchema: z.ZodType<Prisma.NoteTypeSelect> = z.object({
  name: z.boolean().optional(),
}).strict()

export const NoteTypeFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.NoteTypeFindUniqueOrThrowArgs> = z.object({
  select: NoteTypeSelectSchema.optional(),
  where: NoteTypeWhereUniqueInputSchema,
}).strict() ;

export default NoteTypeFindUniqueOrThrowArgsSchema;
