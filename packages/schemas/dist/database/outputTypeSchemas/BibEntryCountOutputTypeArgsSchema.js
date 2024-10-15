import { z } from 'zod';
import { BibEntryCountOutputTypeSelectSchema } from './BibEntryCountOutputTypeSelectSchema.js';
export const BibEntryCountOutputTypeArgsSchema = z.object({
    select: z.lazy(() => BibEntryCountOutputTypeSelectSchema).nullish(),
}).strict();
export default BibEntryCountOutputTypeSelectSchema;
