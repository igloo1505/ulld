import { z } from 'zod';
import { DJTUpdateManyMutationInputSchema } from '../inputTypeSchemas/DJTUpdateManyMutationInputSchema.js';
import { DJTUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/DJTUncheckedUpdateManyInputSchema.js';
import { DJTWhereInputSchema } from '../inputTypeSchemas/DJTWhereInputSchema.js';
export const DJTUpdateManyArgsSchema = z.object({
    data: z.union([DJTUpdateManyMutationInputSchema, DJTUncheckedUpdateManyInputSchema]),
    where: DJTWhereInputSchema.optional(),
}).strict();
export default DJTUpdateManyArgsSchema;
