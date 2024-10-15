import { z } from 'zod';
export const IpynbUpdateoutgoingQuickLinksInputSchema = z.object({
    set: z.string().array().optional(),
    push: z.union([z.string(), z.string().array()]).optional(),
}).strict();
export default IpynbUpdateoutgoingQuickLinksInputSchema;
