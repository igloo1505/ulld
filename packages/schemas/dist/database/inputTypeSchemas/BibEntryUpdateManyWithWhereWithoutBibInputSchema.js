import { z } from 'zod';
import { BibEntryScalarWhereInputSchema } from './BibEntryScalarWhereInputSchema.js';
import { BibEntryUpdateManyMutationInputSchema } from './BibEntryUpdateManyMutationInputSchema.js';
import { BibEntryUncheckedUpdateManyWithoutBibInputSchema } from './BibEntryUncheckedUpdateManyWithoutBibInputSchema.js';
export const BibEntryUpdateManyWithWhereWithoutBibInputSchema = z.object({
    where: z.lazy(() => BibEntryScalarWhereInputSchema),
    data: z.union([z.lazy(() => BibEntryUpdateManyMutationInputSchema), z.lazy(() => BibEntryUncheckedUpdateManyWithoutBibInputSchema)]),
}).strict();
export default BibEntryUpdateManyWithWhereWithoutBibInputSchema;
