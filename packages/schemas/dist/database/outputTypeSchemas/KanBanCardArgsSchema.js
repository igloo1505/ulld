import { z } from 'zod';
import { KanBanCardSelectSchema } from '../inputTypeSchemas/KanBanCardSelectSchema.js';
import { KanBanCardIncludeSchema } from '../inputTypeSchemas/KanBanCardIncludeSchema.js';
export const KanBanCardArgsSchema = z.object({
    select: z.lazy(() => KanBanCardSelectSchema).optional(),
    include: z.lazy(() => KanBanCardIncludeSchema).optional(),
}).strict();
export default KanBanCardArgsSchema;
