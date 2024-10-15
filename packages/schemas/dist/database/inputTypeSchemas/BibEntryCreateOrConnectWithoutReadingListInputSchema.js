import { z } from 'zod';
import { BibEntryWhereUniqueInputSchema } from './BibEntryWhereUniqueInputSchema.js';
import { BibEntryCreateWithoutReadingListInputSchema } from './BibEntryCreateWithoutReadingListInputSchema.js';
import { BibEntryUncheckedCreateWithoutReadingListInputSchema } from './BibEntryUncheckedCreateWithoutReadingListInputSchema.js';
export const BibEntryCreateOrConnectWithoutReadingListInputSchema = z.object({
    where: z.lazy(() => BibEntryWhereUniqueInputSchema),
    create: z.union([z.lazy(() => BibEntryCreateWithoutReadingListInputSchema), z.lazy(() => BibEntryUncheckedCreateWithoutReadingListInputSchema)]),
}).strict();
export default BibEntryCreateOrConnectWithoutReadingListInputSchema;
