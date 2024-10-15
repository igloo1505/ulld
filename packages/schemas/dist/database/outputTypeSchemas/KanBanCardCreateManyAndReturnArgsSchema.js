import { z } from 'zod';
import { KanBanCardCreateManyInputSchema } from '../inputTypeSchemas/KanBanCardCreateManyInputSchema.js';
export const KanBanCardCreateManyAndReturnArgsSchema = z.object({
    data: z.union([KanBanCardCreateManyInputSchema, KanBanCardCreateManyInputSchema.array()]),
    skipDuplicates: z.boolean().optional(),
}).strict();
export default KanBanCardCreateManyAndReturnArgsSchema;
