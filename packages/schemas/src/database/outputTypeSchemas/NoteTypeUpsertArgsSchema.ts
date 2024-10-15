import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
import { NoteTypeWhereUniqueInputSchema } from '../inputTypeSchemas/NoteTypeWhereUniqueInputSchema.js'
import { NoteTypeCreateInputSchema } from '../inputTypeSchemas/NoteTypeCreateInputSchema.js'
import { NoteTypeUncheckedCreateInputSchema } from '../inputTypeSchemas/NoteTypeUncheckedCreateInputSchema.js'
import { NoteTypeUpdateInputSchema } from '../inputTypeSchemas/NoteTypeUpdateInputSchema.js'
import { NoteTypeUncheckedUpdateInputSchema } from '../inputTypeSchemas/NoteTypeUncheckedUpdateInputSchema.js'
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