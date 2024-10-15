import { z } from 'zod';
import { IpynbWhereUniqueInputSchema } from './IpynbWhereUniqueInputSchema.js';
import { IpynbUpdateWithoutTagsInputSchema } from './IpynbUpdateWithoutTagsInputSchema.js';
import { IpynbUncheckedUpdateWithoutTagsInputSchema } from './IpynbUncheckedUpdateWithoutTagsInputSchema.js';
export const IpynbUpdateWithWhereUniqueWithoutTagsInputSchema = z.object({
    where: z.lazy(() => IpynbWhereUniqueInputSchema),
    data: z.union([z.lazy(() => IpynbUpdateWithoutTagsInputSchema), z.lazy(() => IpynbUncheckedUpdateWithoutTagsInputSchema)]),
}).strict();
export default IpynbUpdateWithWhereUniqueWithoutTagsInputSchema;
