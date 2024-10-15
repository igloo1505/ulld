import { z } from 'zod';
import { CitationsGroupWhereUniqueInputSchema } from './CitationsGroupWhereUniqueInputSchema.js';
import { CitationsGroupUpdateWithoutEntriesInputSchema } from './CitationsGroupUpdateWithoutEntriesInputSchema.js';
import { CitationsGroupUncheckedUpdateWithoutEntriesInputSchema } from './CitationsGroupUncheckedUpdateWithoutEntriesInputSchema.js';
export const CitationsGroupUpdateWithWhereUniqueWithoutEntriesInputSchema = z.object({
    where: z.lazy(() => CitationsGroupWhereUniqueInputSchema),
    data: z.union([z.lazy(() => CitationsGroupUpdateWithoutEntriesInputSchema), z.lazy(() => CitationsGroupUncheckedUpdateWithoutEntriesInputSchema)]),
}).strict();
export default CitationsGroupUpdateWithWhereUniqueWithoutEntriesInputSchema;
