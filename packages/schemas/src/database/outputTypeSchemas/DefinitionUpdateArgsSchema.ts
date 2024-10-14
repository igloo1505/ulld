import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DefinitionIncludeSchema } from '../inputTypeSchemas/DefinitionIncludeSchema'
import { DefinitionUpdateInputSchema } from '../inputTypeSchemas/DefinitionUpdateInputSchema'
import { DefinitionUncheckedUpdateInputSchema } from '../inputTypeSchemas/DefinitionUncheckedUpdateInputSchema'
import { DefinitionWhereUniqueInputSchema } from '../inputTypeSchemas/DefinitionWhereUniqueInputSchema'
import { MdxNoteArgsSchema } from "../outputTypeSchemas/MdxNoteArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const DefinitionSelectSchema: z.ZodType<Prisma.DefinitionSelect> = z.object({
  id: z.boolean().optional(),
  label: z.boolean().optional(),
  content: z.boolean().optional(),
  alphabeticalLabel: z.boolean().optional(),
  mdxNoteId: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  lastAccess: z.boolean().optional(),
  mdxNote: z.union([z.boolean(),z.lazy(() => MdxNoteArgsSchema)]).optional(),
}).strict()

export const DefinitionUpdateArgsSchema: z.ZodType<Prisma.DefinitionUpdateArgs> = z.object({
  select: DefinitionSelectSchema.optional(),
  include: DefinitionIncludeSchema.optional(),
  data: z.union([ DefinitionUpdateInputSchema,DefinitionUncheckedUpdateInputSchema ]),
  where: DefinitionWhereUniqueInputSchema,
}).strict() ;

export default DefinitionUpdateArgsSchema;
