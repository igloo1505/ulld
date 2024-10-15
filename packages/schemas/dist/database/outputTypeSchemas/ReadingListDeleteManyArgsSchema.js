import { z } from 'zod';
import { ReadingListWhereInputSchema } from '../inputTypeSchemas/ReadingListWhereInputSchema.js';
export const ReadingListDeleteManyArgsSchema = z.object({
    where: ReadingListWhereInputSchema.optional(),
}).strict();
export default ReadingListDeleteManyArgsSchema;
