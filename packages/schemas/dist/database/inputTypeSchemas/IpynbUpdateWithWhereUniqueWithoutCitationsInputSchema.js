import { z } from 'zod';
import { IpynbWhereUniqueInputSchema } from './IpynbWhereUniqueInputSchema.js';
import { IpynbUpdateWithoutCitationsInputSchema } from './IpynbUpdateWithoutCitationsInputSchema.js';
import { IpynbUncheckedUpdateWithoutCitationsInputSchema } from './IpynbUncheckedUpdateWithoutCitationsInputSchema.js';
export const IpynbUpdateWithWhereUniqueWithoutCitationsInputSchema = z.object({
    where: z.lazy(() => IpynbWhereUniqueInputSchema),
    data: z.union([z.lazy(() => IpynbUpdateWithoutCitationsInputSchema), z.lazy(() => IpynbUncheckedUpdateWithoutCitationsInputSchema)]),
}).strict();
export default IpynbUpdateWithWhereUniqueWithoutCitationsInputSchema;
