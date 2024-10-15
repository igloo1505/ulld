import { z } from 'zod';
import { ReadingListCountOutputTypeSelectSchema } from './ReadingListCountOutputTypeSelectSchema.js';
export const ReadingListCountOutputTypeArgsSchema = z.object({
    select: z.lazy(() => ReadingListCountOutputTypeSelectSchema).nullish(),
}).strict();
export default ReadingListCountOutputTypeSelectSchema;
