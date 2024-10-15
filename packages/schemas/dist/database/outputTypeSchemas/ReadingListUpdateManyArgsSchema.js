import { z } from 'zod';
import { ReadingListUpdateManyMutationInputSchema } from '../inputTypeSchemas/ReadingListUpdateManyMutationInputSchema.js';
import { ReadingListUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/ReadingListUncheckedUpdateManyInputSchema.js';
import { ReadingListWhereInputSchema } from '../inputTypeSchemas/ReadingListWhereInputSchema.js';
export const ReadingListUpdateManyArgsSchema = z.object({
    data: z.union([ReadingListUpdateManyMutationInputSchema, ReadingListUncheckedUpdateManyInputSchema]),
    where: ReadingListWhereInputSchema.optional(),
}).strict();
export default ReadingListUpdateManyArgsSchema;
