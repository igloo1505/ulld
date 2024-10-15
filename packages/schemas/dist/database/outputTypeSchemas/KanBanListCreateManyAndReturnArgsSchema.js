import { z } from 'zod';
import { KanBanListCreateManyInputSchema } from '../inputTypeSchemas/KanBanListCreateManyInputSchema.js';
export const KanBanListCreateManyAndReturnArgsSchema = z.object({
    data: z.union([KanBanListCreateManyInputSchema, KanBanListCreateManyInputSchema.array()]),
    skipDuplicates: z.boolean().optional(),
}).strict();
export default KanBanListCreateManyAndReturnArgsSchema;
