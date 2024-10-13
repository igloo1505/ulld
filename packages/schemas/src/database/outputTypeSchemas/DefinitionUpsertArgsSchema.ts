import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
..//inputTypeSchemas/DefinitionIncludeSchema.js
..//inputTypeSchemas/DefinitionWhereUniqueInputSchema.js
..//inputTypeSchemas/DefinitionCreateInputSchema.js
..//inputTypeSchemas/DefinitionUncheckedCreateInputSchema.js
..//inputTypeSchemas/DefinitionUpdateInputSchema.js
..//inputTypeSchemas/DefinitionUncheckedUpdateInputSchema.js
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
export const DefinitionUpsertArgsSchema: z.ZodType<Prisma.DefinitionUpsertArgs> = z.object({
  select: DefinitionSelectSchema.optional(),
  include: DefinitionIncludeSchema.optional(),
  where: DefinitionWhereUniqueInputSchema,
  create: z.union([ DefinitionCreateInputSchema,DefinitionUncheckedCreateInputSchema ]),
  update: z.union([ DefinitionUpdateInputSchema,DefinitionUncheckedUpdateInputSchema ]),
}).strict() ;
export default DefinitionUpsertArgsSchema;