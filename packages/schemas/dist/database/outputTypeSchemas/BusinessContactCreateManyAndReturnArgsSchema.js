import { z } from 'zod';
import { BusinessContactCreateManyInputSchema } from '../inputTypeSchemas/BusinessContactCreateManyInputSchema.js';
export const BusinessContactCreateManyAndReturnArgsSchema = z.object({
    data: z.union([BusinessContactCreateManyInputSchema, BusinessContactCreateManyInputSchema.array()]),
    skipDuplicates: z.boolean().optional(),
}).strict();
export default BusinessContactCreateManyAndReturnArgsSchema;
