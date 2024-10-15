import { z } from 'zod';
export const IpynbCreateimportantValuesInputSchema = z.object({
    set: z.number().array()
}).strict();
export default IpynbCreateimportantValuesInputSchema;
