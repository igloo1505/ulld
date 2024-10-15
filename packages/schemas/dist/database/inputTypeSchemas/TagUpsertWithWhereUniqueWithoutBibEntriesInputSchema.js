import { z } from 'zod';
import { TagWhereUniqueInputSchema } from './TagWhereUniqueInputSchema.js';
import { TagUpdateWithoutBibEntriesInputSchema } from './TagUpdateWithoutBibEntriesInputSchema.js';
import { TagUncheckedUpdateWithoutBibEntriesInputSchema } from './TagUncheckedUpdateWithoutBibEntriesInputSchema.js';
import { TagCreateWithoutBibEntriesInputSchema } from './TagCreateWithoutBibEntriesInputSchema.js';
import { TagUncheckedCreateWithoutBibEntriesInputSchema } from './TagUncheckedCreateWithoutBibEntriesInputSchema.js';
export const TagUpsertWithWhereUniqueWithoutBibEntriesInputSchema = z.object({
    where: z.lazy(() => TagWhereUniqueInputSchema),
    update: z.union([z.lazy(() => TagUpdateWithoutBibEntriesInputSchema), z.lazy(() => TagUncheckedUpdateWithoutBibEntriesInputSchema)]),
    create: z.union([z.lazy(() => TagCreateWithoutBibEntriesInputSchema), z.lazy(() => TagUncheckedCreateWithoutBibEntriesInputSchema)]),
}).strict();
export default TagUpsertWithWhereUniqueWithoutBibEntriesInputSchema;
