import { z } from 'zod';
import { IpynbCreateWithoutSequentialListInputSchema } from './IpynbCreateWithoutSequentialListInputSchema.js';
import { IpynbUncheckedCreateWithoutSequentialListInputSchema } from './IpynbUncheckedCreateWithoutSequentialListInputSchema.js';
import { IpynbCreateOrConnectWithoutSequentialListInputSchema } from './IpynbCreateOrConnectWithoutSequentialListInputSchema.js';
import { IpynbCreateManySequentialListInputEnvelopeSchema } from './IpynbCreateManySequentialListInputEnvelopeSchema.js';
import { IpynbWhereUniqueInputSchema } from './IpynbWhereUniqueInputSchema.js';
export const IpynbCreateNestedManyWithoutSequentialListInputSchema = z.object({
    create: z.union([z.lazy(() => IpynbCreateWithoutSequentialListInputSchema), z.lazy(() => IpynbCreateWithoutSequentialListInputSchema).array(), z.lazy(() => IpynbUncheckedCreateWithoutSequentialListInputSchema), z.lazy(() => IpynbUncheckedCreateWithoutSequentialListInputSchema).array()]).optional(),
    connectOrCreate: z.union([z.lazy(() => IpynbCreateOrConnectWithoutSequentialListInputSchema), z.lazy(() => IpynbCreateOrConnectWithoutSequentialListInputSchema).array()]).optional(),
    createMany: z.lazy(() => IpynbCreateManySequentialListInputEnvelopeSchema).optional(),
    connect: z.union([z.lazy(() => IpynbWhereUniqueInputSchema), z.lazy(() => IpynbWhereUniqueInputSchema).array()]).optional(),
}).strict();
export default IpynbCreateNestedManyWithoutSequentialListInputSchema;
