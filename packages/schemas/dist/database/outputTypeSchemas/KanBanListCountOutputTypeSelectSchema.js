import { z } from 'zod';
export const KanBanListCountOutputTypeSelectSchema = z.object({
    cards: z.boolean().optional(),
}).strict();
export default KanBanListCountOutputTypeSelectSchema;
