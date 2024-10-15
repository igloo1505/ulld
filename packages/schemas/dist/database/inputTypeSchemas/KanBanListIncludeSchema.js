import { z } from 'zod';
import { KanBanCardFindManyArgsSchema } from "../outputTypeSchemas/KanBanCardFindManyArgsSchema";
import { KanbanArgsSchema } from "../outputTypeSchemas/KanbanArgsSchema";
import { KanBanListCountOutputTypeArgsSchema } from "../outputTypeSchemas/KanBanListCountOutputTypeArgsSchema";
export const KanBanListIncludeSchema = z.object({
    cards: z.union([z.boolean(), z.lazy(() => KanBanCardFindManyArgsSchema)]).optional(),
    Kanban: z.union([z.boolean(), z.lazy(() => KanbanArgsSchema)]).optional(),
    _count: z.union([z.boolean(), z.lazy(() => KanBanListCountOutputTypeArgsSchema)]).optional(),
}).strict();
export default KanBanListIncludeSchema;
