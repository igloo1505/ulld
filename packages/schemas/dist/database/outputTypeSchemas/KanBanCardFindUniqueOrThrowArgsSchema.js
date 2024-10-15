import { z } from 'zod';
import { KanBanCardIncludeSchema } from '../inputTypeSchemas/KanBanCardIncludeSchema.js';
import { KanBanCardWhereUniqueInputSchema } from '../inputTypeSchemas/KanBanCardWhereUniqueInputSchema.js';
import { KanBanListArgsSchema } from "../outputTypeSchemas/KanBanListArgsSchema";
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------
export const KanBanCardSelectSchema = z.object({
    id: z.boolean().optional(),
    listId: z.boolean().optional(),
    indexWithinList: z.boolean().optional(),
    label: z.boolean().optional(),
    details: z.boolean().optional(),
    KanBanList: z.union([z.boolean(), z.lazy(() => KanBanListArgsSchema)]).optional(),
}).strict();
export const KanBanCardFindUniqueOrThrowArgsSchema = z.object({
    select: KanBanCardSelectSchema.optional(),
    include: KanBanCardIncludeSchema.optional(),
    where: KanBanCardWhereUniqueInputSchema,
}).strict();
export default KanBanCardFindUniqueOrThrowArgsSchema;
