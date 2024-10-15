import { z } from 'zod';
import { DietCountOutputTypeSelectSchema } from './DietCountOutputTypeSelectSchema.js';
export const DietCountOutputTypeArgsSchema = z.object({
    select: z.lazy(() => DietCountOutputTypeSelectSchema).nullish(),
}).strict();
export default DietCountOutputTypeSelectSchema;
