import { z } from 'zod';
import { IpynbWhereUniqueInputSchema } from './IpynbWhereUniqueInputSchema.js';
import { IpynbUpdateWithoutSubjectsInputSchema } from './IpynbUpdateWithoutSubjectsInputSchema.js';
import { IpynbUncheckedUpdateWithoutSubjectsInputSchema } from './IpynbUncheckedUpdateWithoutSubjectsInputSchema.js';
export const IpynbUpdateWithWhereUniqueWithoutSubjectsInputSchema = z.object({
    where: z.lazy(() => IpynbWhereUniqueInputSchema),
    data: z.union([z.lazy(() => IpynbUpdateWithoutSubjectsInputSchema), z.lazy(() => IpynbUncheckedUpdateWithoutSubjectsInputSchema)]),
}).strict();
export default IpynbUpdateWithWhereUniqueWithoutSubjectsInputSchema;
