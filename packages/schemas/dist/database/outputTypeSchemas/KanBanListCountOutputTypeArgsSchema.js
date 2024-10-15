import { z } from 'zod';
import { KanBanListCountOutputTypeSelectSchema } from './KanBanListCountOutputTypeSelectSchema.js';
export const KanBanListCountOutputTypeArgsSchema = z.object({
    select: z.lazy(() => KanBanListCountOutputTypeSelectSchema).nullish(),
}).strict();
export default KanBanListCountOutputTypeSelectSchema;
