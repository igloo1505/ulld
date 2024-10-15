import { z } from 'zod';
import { BibCountOutputTypeSelectSchema } from './BibCountOutputTypeSelectSchema.js';
export const BibCountOutputTypeArgsSchema = z.object({
    select: z.lazy(() => BibCountOutputTypeSelectSchema).nullish(),
}).strict();
export default BibCountOutputTypeSelectSchema;
