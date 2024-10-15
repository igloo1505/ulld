import { z } from 'zod';
import { BibEntryCreateWithoutReadingListInputSchema } from './BibEntryCreateWithoutReadingListInputSchema.js';
import { BibEntryUncheckedCreateWithoutReadingListInputSchema } from './BibEntryUncheckedCreateWithoutReadingListInputSchema.js';
import { BibEntryCreateOrConnectWithoutReadingListInputSchema } from './BibEntryCreateOrConnectWithoutReadingListInputSchema.js';
import { BibEntryUpsertWithWhereUniqueWithoutReadingListInputSchema } from './BibEntryUpsertWithWhereUniqueWithoutReadingListInputSchema.js';
import { BibEntryWhereUniqueInputSchema } from './BibEntryWhereUniqueInputSchema.js';
import { BibEntryUpdateWithWhereUniqueWithoutReadingListInputSchema } from './BibEntryUpdateWithWhereUniqueWithoutReadingListInputSchema.js';
import { BibEntryUpdateManyWithWhereWithoutReadingListInputSchema } from './BibEntryUpdateManyWithWhereWithoutReadingListInputSchema.js';
import { BibEntryScalarWhereInputSchema } from './BibEntryScalarWhereInputSchema.js';
export const BibEntryUpdateManyWithoutReadingListNestedInputSchema = z.object({
    create: z.union([z.lazy(() => BibEntryCreateWithoutReadingListInputSchema), z.lazy(() => BibEntryCreateWithoutReadingListInputSchema).array(), z.lazy(() => BibEntryUncheckedCreateWithoutReadingListInputSchema), z.lazy(() => BibEntryUncheckedCreateWithoutReadingListInputSchema).array()]).optional(),
    connectOrCreate: z.union([z.lazy(() => BibEntryCreateOrConnectWithoutReadingListInputSchema), z.lazy(() => BibEntryCreateOrConnectWithoutReadingListInputSchema).array()]).optional(),
    upsert: z.union([z.lazy(() => BibEntryUpsertWithWhereUniqueWithoutReadingListInputSchema), z.lazy(() => BibEntryUpsertWithWhereUniqueWithoutReadingListInputSchema).array()]).optional(),
    set: z.union([z.lazy(() => BibEntryWhereUniqueInputSchema), z.lazy(() => BibEntryWhereUniqueInputSchema).array()]).optional(),
    disconnect: z.union([z.lazy(() => BibEntryWhereUniqueInputSchema), z.lazy(() => BibEntryWhereUniqueInputSchema).array()]).optional(),
    delete: z.union([z.lazy(() => BibEntryWhereUniqueInputSchema), z.lazy(() => BibEntryWhereUniqueInputSchema).array()]).optional(),
    connect: z.union([z.lazy(() => BibEntryWhereUniqueInputSchema), z.lazy(() => BibEntryWhereUniqueInputSchema).array()]).optional(),
    update: z.union([z.lazy(() => BibEntryUpdateWithWhereUniqueWithoutReadingListInputSchema), z.lazy(() => BibEntryUpdateWithWhereUniqueWithoutReadingListInputSchema).array()]).optional(),
    updateMany: z.union([z.lazy(() => BibEntryUpdateManyWithWhereWithoutReadingListInputSchema), z.lazy(() => BibEntryUpdateManyWithWhereWithoutReadingListInputSchema).array()]).optional(),
    deleteMany: z.union([z.lazy(() => BibEntryScalarWhereInputSchema), z.lazy(() => BibEntryScalarWhereInputSchema).array()]).optional(),
}).strict();
export default BibEntryUpdateManyWithoutReadingListNestedInputSchema;
