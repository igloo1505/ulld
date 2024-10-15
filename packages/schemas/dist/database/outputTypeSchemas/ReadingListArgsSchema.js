import { z } from 'zod';
import { ReadingListSelectSchema } from '../inputTypeSchemas/ReadingListSelectSchema.js';
import { ReadingListIncludeSchema } from '../inputTypeSchemas/ReadingListIncludeSchema.js';
export const ReadingListArgsSchema = z.object({
    select: z.lazy(() => ReadingListSelectSchema).optional(),
    include: z.lazy(() => ReadingListIncludeSchema).optional(),
}).strict();
export default ReadingListArgsSchema;
