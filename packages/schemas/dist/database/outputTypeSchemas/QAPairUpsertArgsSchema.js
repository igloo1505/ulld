import { z } from 'zod';
import { QAPairIncludeSchema } from '../inputTypeSchemas/QAPairIncludeSchema.js';
import { QAPairWhereUniqueInputSchema } from '../inputTypeSchemas/QAPairWhereUniqueInputSchema.js';
import { QAPairCreateInputSchema } from '../inputTypeSchemas/QAPairCreateInputSchema.js';
import { QAPairUncheckedCreateInputSchema } from '../inputTypeSchemas/QAPairUncheckedCreateInputSchema.js';
import { QAPairUpdateInputSchema } from '../inputTypeSchemas/QAPairUpdateInputSchema.js';
import { QAPairUncheckedUpdateInputSchema } from '../inputTypeSchemas/QAPairUncheckedUpdateInputSchema.js';
import { TagFindManyArgsSchema } from "../outputTypeSchemas/TagFindManyArgsSchema";
import { TopicFindManyArgsSchema } from "../outputTypeSchemas/TopicFindManyArgsSchema";
import { SubjectFindManyArgsSchema } from "../outputTypeSchemas/SubjectFindManyArgsSchema";
import { PracticeExamFindManyArgsSchema } from "../outputTypeSchemas/PracticeExamFindManyArgsSchema";
import { QAPairCountOutputTypeArgsSchema } from "../outputTypeSchemas/QAPairCountOutputTypeArgsSchema";
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------
export const QAPairSelectSchema = z.object({
    id: z.boolean().optional(),
    question: z.boolean().optional(),
    answer: z.boolean().optional(),
    description: z.boolean().optional(),
    secondaryLabel: z.boolean().optional(),
    correctCount: z.boolean().optional(),
    inCorrectCount: z.boolean().optional(),
    tags: z.union([z.boolean(), z.lazy(() => TagFindManyArgsSchema)]).optional(),
    topics: z.union([z.boolean(), z.lazy(() => TopicFindManyArgsSchema)]).optional(),
    subjects: z.union([z.boolean(), z.lazy(() => SubjectFindManyArgsSchema)]).optional(),
    practiceExam: z.union([z.boolean(), z.lazy(() => PracticeExamFindManyArgsSchema)]).optional(),
    _count: z.union([z.boolean(), z.lazy(() => QAPairCountOutputTypeArgsSchema)]).optional(),
}).strict();
export const QAPairUpsertArgsSchema = z.object({
    select: QAPairSelectSchema.optional(),
    include: QAPairIncludeSchema.optional(),
    where: QAPairWhereUniqueInputSchema,
    create: z.union([QAPairCreateInputSchema, QAPairUncheckedCreateInputSchema]),
    update: z.union([QAPairUpdateInputSchema, QAPairUncheckedUpdateInputSchema]),
}).strict();
export default QAPairUpsertArgsSchema;
