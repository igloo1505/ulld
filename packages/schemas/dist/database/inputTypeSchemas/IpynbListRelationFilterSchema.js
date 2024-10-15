import { z } from 'zod';
import { IpynbWhereInputSchema } from './IpynbWhereInputSchema.js';
export const IpynbListRelationFilterSchema = z.object({
    every: z.lazy(() => IpynbWhereInputSchema).optional(),
    some: z.lazy(() => IpynbWhereInputSchema).optional(),
    none: z.lazy(() => IpynbWhereInputSchema).optional()
}).strict();
export default IpynbListRelationFilterSchema;
