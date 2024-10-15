import { z } from 'zod';
import { BibEntryCreateWithoutBibInputSchema } from './BibEntryCreateWithoutBibInputSchema.js';
import { BibEntryUncheckedCreateWithoutBibInputSchema } from './BibEntryUncheckedCreateWithoutBibInputSchema.js';
import { BibEntryCreateOrConnectWithoutBibInputSchema } from './BibEntryCreateOrConnectWithoutBibInputSchema.js';
import { BibEntryCreateManyBibInputEnvelopeSchema } from './BibEntryCreateManyBibInputEnvelopeSchema.js';
import { BibEntryWhereUniqueInputSchema } from './BibEntryWhereUniqueInputSchema.js';
export const BibEntryCreateNestedManyWithoutBibInputSchema = z.object({
    create: z.union([z.lazy(() => BibEntryCreateWithoutBibInputSchema), z.lazy(() => BibEntryCreateWithoutBibInputSchema).array(), z.lazy(() => BibEntryUncheckedCreateWithoutBibInputSchema), z.lazy(() => BibEntryUncheckedCreateWithoutBibInputSchema).array()]).optional(),
    connectOrCreate: z.union([z.lazy(() => BibEntryCreateOrConnectWithoutBibInputSchema), z.lazy(() => BibEntryCreateOrConnectWithoutBibInputSchema).array()]).optional(),
    createMany: z.lazy(() => BibEntryCreateManyBibInputEnvelopeSchema).optional(),
    connect: z.union([z.lazy(() => BibEntryWhereUniqueInputSchema), z.lazy(() => BibEntryWhereUniqueInputSchema).array()]).optional(),
}).strict();
export default BibEntryCreateNestedManyWithoutBibInputSchema;
