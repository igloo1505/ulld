import { z } from 'zod';
import { IpynbCreateWithoutSubjectsInputSchema } from './IpynbCreateWithoutSubjectsInputSchema.js';
import { IpynbUncheckedCreateWithoutSubjectsInputSchema } from './IpynbUncheckedCreateWithoutSubjectsInputSchema.js';
import { IpynbCreateOrConnectWithoutSubjectsInputSchema } from './IpynbCreateOrConnectWithoutSubjectsInputSchema.js';
import { IpynbWhereUniqueInputSchema } from './IpynbWhereUniqueInputSchema.js';
export const IpynbUncheckedCreateNestedManyWithoutSubjectsInputSchema = z.object({
    create: z.union([z.lazy(() => IpynbCreateWithoutSubjectsInputSchema), z.lazy(() => IpynbCreateWithoutSubjectsInputSchema).array(), z.lazy(() => IpynbUncheckedCreateWithoutSubjectsInputSchema), z.lazy(() => IpynbUncheckedCreateWithoutSubjectsInputSchema).array()]).optional(),
    connectOrCreate: z.union([z.lazy(() => IpynbCreateOrConnectWithoutSubjectsInputSchema), z.lazy(() => IpynbCreateOrConnectWithoutSubjectsInputSchema).array()]).optional(),
    connect: z.union([z.lazy(() => IpynbWhereUniqueInputSchema), z.lazy(() => IpynbWhereUniqueInputSchema).array()]).optional(),
}).strict();
export default IpynbUncheckedCreateNestedManyWithoutSubjectsInputSchema;
