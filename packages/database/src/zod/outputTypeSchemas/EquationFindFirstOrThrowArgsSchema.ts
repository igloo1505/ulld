import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EquationIncludeSchema } from '../inputTypeSchemas/EquationIncludeSchema'
import { EquationWhereInputSchema } from '../inputTypeSchemas/EquationWhereInputSchema'
import { EquationOrderByWithRelationInputSchema } from '../inputTypeSchemas/EquationOrderByWithRelationInputSchema'
import { EquationWhereUniqueInputSchema } from '../inputTypeSchemas/EquationWhereUniqueInputSchema'
import { EquationScalarFieldEnumSchema } from '../inputTypeSchemas/EquationScalarFieldEnumSchema'
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

export const EquationFindFirstOrThrowArgsSchema: z.ZodType<Prisma.EquationFindFirstOrThrowArgs> = z.object({
  select: EquationSelectSchema.optional(),
  include: EquationIncludeSchema.optional(),
  where: EquationWhereInputSchema.optional(),
  orderBy: z.union([ EquationOrderByWithRelationInputSchema.array(),EquationOrderByWithRelationInputSchema ]).optional(),
  cursor: EquationWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ EquationScalarFieldEnumSchema,EquationScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default EquationFindFirstOrThrowArgsSchema;
