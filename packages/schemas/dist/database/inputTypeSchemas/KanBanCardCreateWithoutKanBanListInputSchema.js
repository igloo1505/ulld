import { z } from 'zod';
export const KanBanCardCreateWithoutKanBanListInputSchema = z.object({
    indexWithinList: z.number().int(),
    label: z.string().optional().nullable(),
    details: z.string().optional().nullable()
}).strict();
export default KanBanCardCreateWithoutKanBanListInputSchema;
