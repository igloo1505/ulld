import { z } from 'zod';
import { IpynbCreateManyInputSchema } from '../inputTypeSchemas/IpynbCreateManyInputSchema.js';
export const IpynbCreateManyAndReturnArgsSchema = z.object({
    data: z.union([IpynbCreateManyInputSchema, IpynbCreateManyInputSchema.array()]),
    skipDuplicates: z.boolean().optional(),
}).strict();
export default IpynbCreateManyAndReturnArgsSchema;
