import { z } from 'zod';
import { BibEntryScalarWhereInputSchema } from './BibEntryScalarWhereInputSchema.js';
import { BibEntryUpdateManyMutationInputSchema } from './BibEntryUpdateManyMutationInputSchema.js';
import { BibEntryUncheckedUpdateManyWithoutTagsInputSchema } from './BibEntryUncheckedUpdateManyWithoutTagsInputSchema.js';
export const BibEntryUpdateManyWithWhereWithoutTagsInputSchema = z.object({
    where: z.lazy(() => BibEntryScalarWhereInputSchema),
    data: z.union([z.lazy(() => BibEntryUpdateManyMutationInputSchema), z.lazy(() => BibEntryUncheckedUpdateManyWithoutTagsInputSchema)]),
}).strict();
export default BibEntryUpdateManyWithWhereWithoutTagsInputSchema;
