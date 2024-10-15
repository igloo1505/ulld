import { z } from 'zod';
import { BusinessContactUpdateManyMutationInputSchema } from '../inputTypeSchemas/BusinessContactUpdateManyMutationInputSchema.js';
import { BusinessContactUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/BusinessContactUncheckedUpdateManyInputSchema.js';
import { BusinessContactWhereInputSchema } from '../inputTypeSchemas/BusinessContactWhereInputSchema.js';
export const BusinessContactUpdateManyArgsSchema = z.object({
    data: z.union([BusinessContactUpdateManyMutationInputSchema, BusinessContactUncheckedUpdateManyInputSchema]),
    where: BusinessContactWhereInputSchema.optional(),
}).strict();
export default BusinessContactUpdateManyArgsSchema;
