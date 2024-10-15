import { z } from 'zod';
import { PracticeExamIncludeSchema } from '../inputTypeSchemas/PracticeExamIncludeSchema.js';
import { PracticeExamWhereInputSchema } from '../inputTypeSchemas/PracticeExamWhereInputSchema.js';
import { PracticeExamOrderByWithRelationInputSchema } from '../inputTypeSchemas/PracticeExamOrderByWithRelationInputSchema.js';
import { PracticeExamWhereUniqueInputSchema } from '../inputTypeSchemas/PracticeExamWhereUniqueInputSchema.js';
import { PracticeExamScalarFieldEnumSchema } from '../inputTypeSchemas/PracticeExamScalarFieldEnumSchema.js';
import { TopicFindManyArgsSchema } from "../outputTypeSchemas/TopicFindManyArgsSchema";
import { TagFindManyArgsSchema } from "../outputTypeSchemas/TagFindManyArgsSchema";
import { SubjectFindManyArgsSchema } from "../outputTypeSchemas/SubjectFindManyArgsSchema";
import { QAPairFindManyArgsSchema } from "../outputTypeSchemas/QAPairFindManyArgsSchema";
import { PracticeExamCountOutputTypeArgsSchema } from "../outputTypeSchemas/PracticeExamCountOutputTypeArgsSchema";
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------
export const PracticeExamSelectSchema = z.object({
    id: z.boolean().optional(),
    correctCount: z.boolean().optional(),
    inCorrectCount: z.boolean().optional(),
    timeLimitInSeconds: z.boolean().optional(),
    timeCompletedInSeconds: z.boolean().optional(),
    date: z.boolean().optional(),
    topics: z.union([z.boolean(), z.lazy(() => TopicFindManyArgsSchema)]).optional(),
    tags: z.union([z.boolean(), z.lazy(() => TagFindManyArgsSchema)]).optional(),
    subjects: z.union([z.boolean(), z.lazy(() => SubjectFindManyArgsSchema)]).optional(),
    questions: z.union([z.boolean(), z.lazy(() => QAPairFindManyArgsSchema)]).optional(),
    _count: z.union([z.boolean(), z.lazy(() => PracticeExamCountOutputTypeArgsSchema)]).optional(),
}).strict();
export const PracticeExamFindManyArgsSchema = z.object({
    select: PracticeExamSelectSchema.optional(),
    include: PracticeExamIncludeSchema.optional(),
    where: PracticeExamWhereInputSchema.optional(),
    orderBy: z.union([PracticeExamOrderByWithRelationInputSchema.array(), PracticeExamOrderByWithRelationInputSchema]).optional(),
    cursor: PracticeExamWhereUniqueInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z.union([PracticeExamScalarFieldEnumSchema, PracticeExamScalarFieldEnumSchema.array()]).optional(),
}).strict();
export default PracticeExamFindManyArgsSchema;
