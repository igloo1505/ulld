import { z } from 'zod';
import { KanbanIncludeSchema } from '../inputTypeSchemas/KanbanIncludeSchema.js';
import { KanbanWhereUniqueInputSchema } from '../inputTypeSchemas/KanbanWhereUniqueInputSchema.js';
import { KanbanCreateInputSchema } from '../inputTypeSchemas/KanbanCreateInputSchema.js';
import { KanbanUncheckedCreateInputSchema } from '../inputTypeSchemas/KanbanUncheckedCreateInputSchema.js';
import { KanbanUpdateInputSchema } from '../inputTypeSchemas/KanbanUpdateInputSchema.js';
import { KanbanUncheckedUpdateInputSchema } from '../inputTypeSchemas/KanbanUncheckedUpdateInputSchema.js';
import { KanBanListFindManyArgsSchema } from "../outputTypeSchemas/KanBanListFindManyArgsSchema";
import { TagFindManyArgsSchema } from "../outputTypeSchemas/TagFindManyArgsSchema";
import { SubjectFindManyArgsSchema } from "../outputTypeSchemas/SubjectFindManyArgsSchema";
import { TopicFindManyArgsSchema } from "../outputTypeSchemas/TopicFindManyArgsSchema";
import { KanbanCountOutputTypeArgsSchema } from "../outputTypeSchemas/KanbanCountOutputTypeArgsSchema";
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------
export const KanbanSelectSchema = z.object({
    id: z.boolean().optional(),
    title: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    lastUpdate: z.boolean().optional(),
    lists: z.union([z.boolean(), z.lazy(() => KanBanListFindManyArgsSchema)]).optional(),
    tags: z.union([z.boolean(), z.lazy(() => TagFindManyArgsSchema)]).optional(),
    subjects: z.union([z.boolean(), z.lazy(() => SubjectFindManyArgsSchema)]).optional(),
    topics: z.union([z.boolean(), z.lazy(() => TopicFindManyArgsSchema)]).optional(),
    _count: z.union([z.boolean(), z.lazy(() => KanbanCountOutputTypeArgsSchema)]).optional(),
}).strict();
export const KanbanUpsertArgsSchema = z.object({
    select: KanbanSelectSchema.optional(),
    include: KanbanIncludeSchema.optional(),
    where: KanbanWhereUniqueInputSchema,
    create: z.union([KanbanCreateInputSchema, KanbanUncheckedCreateInputSchema]),
    update: z.union([KanbanUpdateInputSchema, KanbanUncheckedUpdateInputSchema]),
}).strict();
export default KanbanUpsertArgsSchema;
