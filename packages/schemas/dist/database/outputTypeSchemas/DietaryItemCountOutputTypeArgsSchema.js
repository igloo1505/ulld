import { z } from 'zod';
import { DietaryItemCountOutputTypeSelectSchema } from './DietaryItemCountOutputTypeSelectSchema.js';
export const DietaryItemCountOutputTypeArgsSchema = z.object({
    select: z.lazy(() => DietaryItemCountOutputTypeSelectSchema).nullish(),
}).strict();
export default DietaryItemCountOutputTypeSelectSchema;
