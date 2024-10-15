import { z } from 'zod';
import { IpynbCountOutputTypeSelectSchema } from './IpynbCountOutputTypeSelectSchema.js';
export const IpynbCountOutputTypeArgsSchema = z.object({
    select: z.lazy(() => IpynbCountOutputTypeSelectSchema).nullish(),
}).strict();
export default IpynbCountOutputTypeSelectSchema;
