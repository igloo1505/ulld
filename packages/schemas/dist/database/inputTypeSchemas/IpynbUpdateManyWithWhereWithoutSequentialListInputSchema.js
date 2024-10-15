import { z } from 'zod';
import { IpynbScalarWhereInputSchema } from './IpynbScalarWhereInputSchema.js';
import { IpynbUpdateManyMutationInputSchema } from './IpynbUpdateManyMutationInputSchema.js';
import { IpynbUncheckedUpdateManyWithoutSequentialListInputSchema } from './IpynbUncheckedUpdateManyWithoutSequentialListInputSchema.js';
export const IpynbUpdateManyWithWhereWithoutSequentialListInputSchema = z.object({
    where: z.lazy(() => IpynbScalarWhereInputSchema),
    data: z.union([z.lazy(() => IpynbUpdateManyMutationInputSchema), z.lazy(() => IpynbUncheckedUpdateManyWithoutSequentialListInputSchema)]),
}).strict();
export default IpynbUpdateManyWithWhereWithoutSequentialListInputSchema;
