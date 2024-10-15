import { z } from 'zod';
import { IpynbWhereUniqueInputSchema } from './IpynbWhereUniqueInputSchema.js';
import { IpynbUpdateWithoutSequentialListInputSchema } from './IpynbUpdateWithoutSequentialListInputSchema.js';
import { IpynbUncheckedUpdateWithoutSequentialListInputSchema } from './IpynbUncheckedUpdateWithoutSequentialListInputSchema.js';
export const IpynbUpdateWithWhereUniqueWithoutSequentialListInputSchema = z.object({
    where: z.lazy(() => IpynbWhereUniqueInputSchema),
    data: z.union([z.lazy(() => IpynbUpdateWithoutSequentialListInputSchema), z.lazy(() => IpynbUncheckedUpdateWithoutSequentialListInputSchema)]),
}).strict();
export default IpynbUpdateWithWhereUniqueWithoutSequentialListInputSchema;
