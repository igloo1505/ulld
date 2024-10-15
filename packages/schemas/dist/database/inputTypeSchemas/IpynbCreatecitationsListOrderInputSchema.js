import { z } from 'zod';
export const IpynbCreatecitationsListOrderInputSchema = z.object({
    set: z.string().array()
}).strict();
export default IpynbCreatecitationsListOrderInputSchema;
