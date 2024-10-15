import { z } from 'zod';
import { BibEntryCreateWithoutTopicsInputSchema } from './BibEntryCreateWithoutTopicsInputSchema.js';
import { BibEntryUncheckedCreateWithoutTopicsInputSchema } from './BibEntryUncheckedCreateWithoutTopicsInputSchema.js';
import { BibEntryCreateOrConnectWithoutTopicsInputSchema } from './BibEntryCreateOrConnectWithoutTopicsInputSchema.js';
import { BibEntryUpsertWithWhereUniqueWithoutTopicsInputSchema } from './BibEntryUpsertWithWhereUniqueWithoutTopicsInputSchema.js';
import { BibEntryWhereUniqueInputSchema } from './BibEntryWhereUniqueInputSchema.js';
import { BibEntryUpdateWithWhereUniqueWithoutTopicsInputSchema } from './BibEntryUpdateWithWhereUniqueWithoutTopicsInputSchema.js';
import { BibEntryUpdateManyWithWhereWithoutTopicsInputSchema } from './BibEntryUpdateManyWithWhereWithoutTopicsInputSchema.js';
import { BibEntryScalarWhereInputSchema } from './BibEntryScalarWhereInputSchema.js';
export const BibEntryUncheckedUpdateManyWithoutTopicsNestedInputSchema = z.object({
    create: z.union([z.lazy(() => BibEntryCreateWithoutTopicsInputSchema), z.lazy(() => BibEntryCreateWithoutTopicsInputSchema).array(), z.lazy(() => BibEntryUncheckedCreateWithoutTopicsInputSchema), z.lazy(() => BibEntryUncheckedCreateWithoutTopicsInputSchema).array()]).optional(),
    connectOrCreate: z.union([z.lazy(() => BibEntryCreateOrConnectWithoutTopicsInputSchema), z.lazy(() => BibEntryCreateOrConnectWithoutTopicsInputSchema).array()]).optional(),
    upsert: z.union([z.lazy(() => BibEntryUpsertWithWhereUniqueWithoutTopicsInputSchema), z.lazy(() => BibEntryUpsertWithWhereUniqueWithoutTopicsInputSchema).array()]).optional(),
    set: z.union([z.lazy(() => BibEntryWhereUniqueInputSchema), z.lazy(() => BibEntryWhereUniqueInputSchema).array()]).optional(),
    disconnect: z.union([z.lazy(() => BibEntryWhereUniqueInputSchema), z.lazy(() => BibEntryWhereUniqueInputSchema).array()]).optional(),
    delete: z.union([z.lazy(() => BibEntryWhereUniqueInputSchema), z.lazy(() => BibEntryWhereUniqueInputSchema).array()]).optional(),
    connect: z.union([z.lazy(() => BibEntryWhereUniqueInputSchema), z.lazy(() => BibEntryWhereUniqueInputSchema).array()]).optional(),
    update: z.union([z.lazy(() => BibEntryUpdateWithWhereUniqueWithoutTopicsInputSchema), z.lazy(() => BibEntryUpdateWithWhereUniqueWithoutTopicsInputSchema).array()]).optional(),
    updateMany: z.union([z.lazy(() => BibEntryUpdateManyWithWhereWithoutTopicsInputSchema), z.lazy(() => BibEntryUpdateManyWithWhereWithoutTopicsInputSchema).array()]).optional(),
    deleteMany: z.union([z.lazy(() => BibEntryScalarWhereInputSchema), z.lazy(() => BibEntryScalarWhereInputSchema).array()]).optional(),
}).strict();
export default BibEntryUncheckedUpdateManyWithoutTopicsNestedInputSchema;
