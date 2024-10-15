import { z } from 'zod';
import { IpynbWhereUniqueInputSchema } from './IpynbWhereUniqueInputSchema.js';
import { IpynbCreateWithoutSubjectsInputSchema } from './IpynbCreateWithoutSubjectsInputSchema.js';
import { IpynbUncheckedCreateWithoutSubjectsInputSchema } from './IpynbUncheckedCreateWithoutSubjectsInputSchema.js';
export const IpynbCreateOrConnectWithoutSubjectsInputSchema = z.object({
    where: z.lazy(() => IpynbWhereUniqueInputSchema),
    create: z.union([z.lazy(() => IpynbCreateWithoutSubjectsInputSchema), z.lazy(() => IpynbUncheckedCreateWithoutSubjectsInputSchema)]),
}).strict();
export default IpynbCreateOrConnectWithoutSubjectsInputSchema;
