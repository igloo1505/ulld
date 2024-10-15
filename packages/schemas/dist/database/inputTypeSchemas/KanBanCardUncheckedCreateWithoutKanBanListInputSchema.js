import { z } from 'zod';
export const KanBanCardUncheckedCreateWithoutKanBanListInputSchema = z.object({
    id: z.number().int().optional(),
    indexWithinList: z.number().int(),
    label: z.string().optional().nullable(),
    details: z.string().optional().nullable()
}).strict();
export default KanBanCardUncheckedCreateWithoutKanBanListInputSchema;
