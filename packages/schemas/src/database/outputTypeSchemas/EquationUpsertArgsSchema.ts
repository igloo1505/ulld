import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
import { EquationIncludeSchema } from '../inputTypeSchemas/EquationIncludeSchema.js'
import { EquationWhereUniqueInputSchema } from '../inputTypeSchemas/EquationWhereUniqueInputSchema.js'
import { EquationCreateInputSchema } from '../inputTypeSchemas/EquationCreateInputSchema.js'
import { EquationUncheckedCreateInputSchema } from '../inputTypeSchemas/EquationUncheckedCreateInputSchema.js'
import { EquationUpdateInputSchema } from '../inputTypeSchemas/EquationUpdateInputSchema.js'
import { EquationUncheckedUpdateInputSchema } from '../inputTypeSchemas/EquationUncheckedUpdateInputSchema.js'
import { RelatedValuesFindManyArgsSchema } from "../outputTypeSchemas/RelatedValuesFindManyArgsSchema"
import { TagFindManyArgsSchema } from "../outputTypeSchemas/TagFindManyArgsSchema"
import { TopicFindManyArgsSchema } from "../outputTypeSchemas/TopicFindManyArgsSchema"
import { SubjectFindManyArgsSchema } from "../outputTypeSchemas/SubjectFindManyArgsSchema"
import { MdxNoteFindManyArgsSchema } from "../outputTypeSchemas/MdxNoteFindManyArgsSchema"
import { EquationCountOutputTypeArgsSchema } from "../outputTypeSchemas/EquationCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------
export const EquationSelectSchema: z.ZodType<Prisma.EquationSelect> = z.object({
  id: z.boolean().optional(),
  equationId: z.boolean().optional(),
  title: z.boolean().optional(),
  desc: z.boolean().optional(),
  content: z.boolean().optional(),
  asPython: z.boolean().optional(),
  variableLegend: z.boolean().optional(),
  variables: z.boolean().optional(),
  keywords: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  lastAccess: z.boolean().optional(),
  relatedValues: z.union([z.boolean(),z.lazy(() => RelatedValuesFindManyArgsSchema)]).optional(),
  tags: z.union([z.boolean(),z.lazy(() => TagFindManyArgsSchema)]).optional(),
  topics: z.union([z.boolean(),z.lazy(() => TopicFindManyArgsSchema)]).optional(),
  subjects: z.union([z.boolean(),z.lazy(() => SubjectFindManyArgsSchema)]).optional(),
  mdxNotes: z.union([z.boolean(),z.lazy(() => MdxNoteFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => EquationCountOutputTypeArgsSchema)]).optional(),
}).strict()
export const EquationUpsertArgsSchema: z.ZodType<Prisma.EquationUpsertArgs> = z.object({
  select: EquationSelectSchema.optional(),
  include: EquationIncludeSchema.optional(),
  where: EquationWhereUniqueInputSchema,
  create: z.union([ EquationCreateInputSchema,EquationUncheckedCreateInputSchema ]),
  update: z.union([ EquationUpdateInputSchema,EquationUncheckedUpdateInputSchema ]),
}).strict() ;
export default EquationUpsertArgsSchema;