import { z } from 'zod';
import { BibEntryScalarWhereInputSchema } from './BibEntryScalarWhereInputSchema.js';
import { BibEntryUpdateManyMutationInputSchema } from './BibEntryUpdateManyMutationInputSchema.js';
import { BibEntryUncheckedUpdateManyWithoutSubjectsInputSchema } from './BibEntryUncheckedUpdateManyWithoutSubjectsInputSchema.js';
export const BibEntryUpdateManyWithWhereWithoutSubjectsInputSchema = z.object({
    where: z.lazy(() => BibEntryScalarWhereInputSchema),
    data: z.union([z.lazy(() => BibEntryUpdateManyMutationInputSchema), z.lazy(() => BibEntryUncheckedUpdateManyWithoutSubjectsInputSchema)]),
}).strict();
export default BibEntryUpdateManyWithWhereWithoutSubjectsInputSchema;
