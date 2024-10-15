import { z } from 'zod';
import { CitationsGroupCountOutputTypeSelectSchema } from './CitationsGroupCountOutputTypeSelectSchema.js';
export const CitationsGroupCountOutputTypeArgsSchema = z.object({
    select: z.lazy(() => CitationsGroupCountOutputTypeSelectSchema).nullish(),
}).strict();
export default CitationsGroupCountOutputTypeSelectSchema;
