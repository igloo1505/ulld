import { z } from 'zod';
import { IpynbWhereUniqueInputSchema } from './IpynbWhereUniqueInputSchema.js';
import { IpynbCreateWithoutTopicsInputSchema } from './IpynbCreateWithoutTopicsInputSchema.js';
import { IpynbUncheckedCreateWithoutTopicsInputSchema } from './IpynbUncheckedCreateWithoutTopicsInputSchema.js';
export const IpynbCreateOrConnectWithoutTopicsInputSchema = z.object({
    where: z.lazy(() => IpynbWhereUniqueInputSchema),
    create: z.union([z.lazy(() => IpynbCreateWithoutTopicsInputSchema), z.lazy(() => IpynbUncheckedCreateWithoutTopicsInputSchema)]),
}).strict();
export default IpynbCreateOrConnectWithoutTopicsInputSchema;
