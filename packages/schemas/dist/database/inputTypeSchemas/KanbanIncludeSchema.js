import { z } from 'zod';
import { KanBanListFindManyArgsSchema } from "../outputTypeSchemas/KanBanListFindManyArgsSchema";
import { TagFindManyArgsSchema } from "../outputTypeSchemas/TagFindManyArgsSchema";
import { SubjectFindManyArgsSchema } from "../outputTypeSchemas/SubjectFindManyArgsSchema";
import { TopicFindManyArgsSchema } from "../outputTypeSchemas/TopicFindManyArgsSchema";
import { KanbanCountOutputTypeArgsSchema } from "../outputTypeSchemas/KanbanCountOutputTypeArgsSchema";
export const KanbanIncludeSchema = z.object({
    lists: z.union([z.boolean(), z.lazy(() => KanBanListFindManyArgsSchema)]).optional(),
    tags: z.union([z.boolean(), z.lazy(() => TagFindManyArgsSchema)]).optional(),
    subjects: z.union([z.boolean(), z.lazy(() => SubjectFindManyArgsSchema)]).optional(),
    topics: z.union([z.boolean(), z.lazy(() => TopicFindManyArgsSchema)]).optional(),
    _count: z.union([z.boolean(), z.lazy(() => KanbanCountOutputTypeArgsSchema)]).optional(),
}).strict();
export default KanbanIncludeSchema;
