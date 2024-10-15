import { z } from 'zod';
export const IpynbCreateoutgoingQuickLinksInputSchema = z.object({
    set: z.string().array()
}).strict();
export default IpynbCreateoutgoingQuickLinksInputSchema;
