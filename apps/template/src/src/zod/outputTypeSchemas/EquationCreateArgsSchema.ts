import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EquationIncludeSchema } from '../inputTypeSchemas/EquationIncludeSchema'
import { EquationCreateInputSchema } from '../inputTypeSchemas/EquationCreateInputSchema'
import { EquationUncheckedCreateInputSchema } from '../inputTypeSchemas/EquationUncheckedCreateInputSchema'
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

export const EquationCreateArgsSchema: z.ZodType<Prisma.EquationCreateArgs> = z.object({
  select: EquationSelectSchema.optional(),
  include: EquationIncludeSchema.optional(),
  data: z.union([ EquationCreateInputSchema,EquationUncheckedCreateInputSchema ]),
}).strict() ;

export default EquationCreateArgsSchema;
