import { z } from 'zod';
import { TagWhereUniqueInputSchema } from './TagWhereUniqueInputSchema.js';
import { TagCreateWithoutBibEntriesInputSchema } from './TagCreateWithoutBibEntriesInputSchema.js';
import { TagUncheckedCreateWithoutBibEntriesInputSchema } from './TagUncheckedCreateWithoutBibEntriesInputSchema.js';
export const TagCreateOrConnectWithoutBibEntriesInputSchema = z.object({
    where: z.lazy(() => TagWhereUniqueInputSchema),
    create: z.union([z.lazy(() => TagCreateWithoutBibEntriesInputSchema), z.lazy(() => TagUncheckedCreateWithoutBibEntriesInputSchema)]),
}).strict();
export default TagCreateOrConnectWithoutBibEntriesInputSchema;
