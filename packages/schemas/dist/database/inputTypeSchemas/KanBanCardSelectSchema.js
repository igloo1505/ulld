import { z } from 'zod';
import { KanBanListArgsSchema } from "../outputTypeSchemas/KanBanListArgsSchema";
export const KanBanCardSelectSchema = z.object({
    id: z.boolean().optional(),
    listId: z.boolean().optional(),
    indexWithinList: z.boolean().optional(),
    label: z.boolean().optional(),
    details: z.boolean().optional(),
    KanBanList: z.union([z.boolean(), z.lazy(() => KanBanListArgsSchema)]).optional(),
}).strict();
export default KanBanCardSelectSchema;
