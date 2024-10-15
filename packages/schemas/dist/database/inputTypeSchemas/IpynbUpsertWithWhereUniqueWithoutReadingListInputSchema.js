import { z } from 'zod';
import { IpynbWhereUniqueInputSchema } from './IpynbWhereUniqueInputSchema.js';
import { IpynbUpdateWithoutReadingListInputSchema } from './IpynbUpdateWithoutReadingListInputSchema.js';
import { IpynbUncheckedUpdateWithoutReadingListInputSchema } from './IpynbUncheckedUpdateWithoutReadingListInputSchema.js';
import { IpynbCreateWithoutReadingListInputSchema } from './IpynbCreateWithoutReadingListInputSchema.js';
import { IpynbUncheckedCreateWithoutReadingListInputSchema } from './IpynbUncheckedCreateWithoutReadingListInputSchema.js';
export const IpynbUpsertWithWhereUniqueWithoutReadingListInputSchema = z.object({
    where: z.lazy(() => IpynbWhereUniqueInputSchema),
    update: z.union([z.lazy(() => IpynbUpdateWithoutReadingListInputSchema), z.lazy(() => IpynbUncheckedUpdateWithoutReadingListInputSchema)]),
    create: z.union([z.lazy(() => IpynbCreateWithoutReadingListInputSchema), z.lazy(() => IpynbUncheckedCreateWithoutReadingListInputSchema)]),
}).strict();
export default IpynbUpsertWithWhereUniqueWithoutReadingListInputSchema;
