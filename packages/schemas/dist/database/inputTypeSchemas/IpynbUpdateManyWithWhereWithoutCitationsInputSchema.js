import { z } from 'zod';
import { IpynbScalarWhereInputSchema } from './IpynbScalarWhereInputSchema.js';
import { IpynbUpdateManyMutationInputSchema } from './IpynbUpdateManyMutationInputSchema.js';
import { IpynbUncheckedUpdateManyWithoutCitationsInputSchema } from './IpynbUncheckedUpdateManyWithoutCitationsInputSchema.js';
export const IpynbUpdateManyWithWhereWithoutCitationsInputSchema = z.object({
    where: z.lazy(() => IpynbScalarWhereInputSchema),
    data: z.union([z.lazy(() => IpynbUpdateManyMutationInputSchema), z.lazy(() => IpynbUncheckedUpdateManyWithoutCitationsInputSchema)]),
}).strict();
export default IpynbUpdateManyWithWhereWithoutCitationsInputSchema;
