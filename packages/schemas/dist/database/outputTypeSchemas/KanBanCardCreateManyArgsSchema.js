import { z } from 'zod';
import { KanBanCardCreateManyInputSchema } from '../inputTypeSchemas/KanBanCardCreateManyInputSchema.js';
export const KanBanCardCreateManyArgsSchema = z.object({
    data: z.union([KanBanCardCreateManyInputSchema, KanBanCardCreateManyInputSchema.array()]),
    skipDuplicates: z.boolean().optional(),
}).strict();
export default KanBanCardCreateManyArgsSchema;
