import { z } from 'zod';
import { BibEntryWhereUniqueInputSchema } from './BibEntryWhereUniqueInputSchema.js';
import { BibEntryCreateWithoutSubjectsInputSchema } from './BibEntryCreateWithoutSubjectsInputSchema.js';
import { BibEntryUncheckedCreateWithoutSubjectsInputSchema } from './BibEntryUncheckedCreateWithoutSubjectsInputSchema.js';
export const BibEntryCreateOrConnectWithoutSubjectsInputSchema = z.object({
    where: z.lazy(() => BibEntryWhereUniqueInputSchema),
    create: z.union([z.lazy(() => BibEntryCreateWithoutSubjectsInputSchema), z.lazy(() => BibEntryUncheckedCreateWithoutSubjectsInputSchema)]),
}).strict();
export default BibEntryCreateOrConnectWithoutSubjectsInputSchema;
