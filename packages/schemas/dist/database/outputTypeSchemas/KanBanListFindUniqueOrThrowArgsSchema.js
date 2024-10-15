import { z } from 'zod';
import { KanBanListIncludeSchema } from '../inputTypeSchemas/KanBanListIncludeSchema.js';
import { KanBanListWhereUniqueInputSchema } from '../inputTypeSchemas/KanBanListWhereUniqueInputSchema.js';
import { KanBanCardFindManyArgsSchema } from "../outputTypeSchemas/KanBanCardFindManyArgsSchema";
import { KanbanArgsSchema } from "../outputTypeSchemas/KanbanArgsSchema";
import { KanBanListCountOutputTypeArgsSchema } from "../outputTypeSchemas/KanBanListCountOutputTypeArgsSchema";
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------
export const KanBanListSelectSchema = z.object({
    id: z.boolean().optional(),
    indexWithinBoard: z.boolean().optional(),
    title: z.boolean().optional(),
    boardId: z.boolean().optional(),
    cards: z.union([z.boolean(), z.lazy(() => KanBanCardFindManyArgsSchema)]).optional(),
    Kanban: z.union([z.boolean(), z.lazy(() => KanbanArgsSchema)]).optional(),
    _count: z.union([z.boolean(), z.lazy(() => KanBanListCountOutputTypeArgsSchema)]).optional(),
}).strict();
export const KanBanListFindUniqueOrThrowArgsSchema = z.object({
    select: KanBanListSelectSchema.optional(),
    include: KanBanListIncludeSchema.optional(),
    where: KanBanListWhereUniqueInputSchema,
}).strict();
export default KanBanListFindUniqueOrThrowArgsSchema;
