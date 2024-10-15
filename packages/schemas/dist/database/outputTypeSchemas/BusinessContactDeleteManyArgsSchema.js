import { z } from 'zod';
import { BusinessContactWhereInputSchema } from '../inputTypeSchemas/BusinessContactWhereInputSchema.js';
export const BusinessContactDeleteManyArgsSchema = z.object({
    where: BusinessContactWhereInputSchema.optional(),
}).strict();
export default BusinessContactDeleteManyArgsSchema;
