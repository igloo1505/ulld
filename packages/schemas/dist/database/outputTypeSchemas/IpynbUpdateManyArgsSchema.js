import { z } from 'zod';
import { IpynbUpdateManyMutationInputSchema } from '../inputTypeSchemas/IpynbUpdateManyMutationInputSchema.js';
import { IpynbUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/IpynbUncheckedUpdateManyInputSchema.js';
import { IpynbWhereInputSchema } from '../inputTypeSchemas/IpynbWhereInputSchema.js';
export const IpynbUpdateManyArgsSchema = z.object({
    data: z.union([IpynbUpdateManyMutationInputSchema, IpynbUncheckedUpdateManyInputSchema]),
    where: IpynbWhereInputSchema.optional(),
}).strict();
export default IpynbUpdateManyArgsSchema;
