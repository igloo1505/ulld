import { z } from 'zod';
import { CitationsGroupScalarWhereInputSchema } from './CitationsGroupScalarWhereInputSchema.js';
import { CitationsGroupUpdateManyMutationInputSchema } from './CitationsGroupUpdateManyMutationInputSchema.js';
import { CitationsGroupUncheckedUpdateManyWithoutEntriesInputSchema } from './CitationsGroupUncheckedUpdateManyWithoutEntriesInputSchema.js';
export const CitationsGroupUpdateManyWithWhereWithoutEntriesInputSchema = z.object({
    where: z.lazy(() => CitationsGroupScalarWhereInputSchema),
    data: z.union([z.lazy(() => CitationsGroupUpdateManyMutationInputSchema), z.lazy(() => CitationsGroupUncheckedUpdateManyWithoutEntriesInputSchema)]),
}).strict();
export default CitationsGroupUpdateManyWithWhereWithoutEntriesInputSchema;
