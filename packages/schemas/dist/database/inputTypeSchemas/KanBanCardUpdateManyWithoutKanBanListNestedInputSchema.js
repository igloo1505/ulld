import { z } from 'zod';
import { KanBanCardCreateWithoutKanBanListInputSchema } from './KanBanCardCreateWithoutKanBanListInputSchema.js';
import { KanBanCardUncheckedCreateWithoutKanBanListInputSchema } from './KanBanCardUncheckedCreateWithoutKanBanListInputSchema.js';
import { KanBanCardCreateOrConnectWithoutKanBanListInputSchema } from './KanBanCardCreateOrConnectWithoutKanBanListInputSchema.js';
import { KanBanCardUpsertWithWhereUniqueWithoutKanBanListInputSchema } from './KanBanCardUpsertWithWhereUniqueWithoutKanBanListInputSchema.js';
import { KanBanCardCreateManyKanBanListInputEnvelopeSchema } from './KanBanCardCreateManyKanBanListInputEnvelopeSchema.js';
import { KanBanCardWhereUniqueInputSchema } from './KanBanCardWhereUniqueInputSchema.js';
import { KanBanCardUpdateWithWhereUniqueWithoutKanBanListInputSchema } from './KanBanCardUpdateWithWhereUniqueWithoutKanBanListInputSchema.js';
import { KanBanCardUpdateManyWithWhereWithoutKanBanListInputSchema } from './KanBanCardUpdateManyWithWhereWithoutKanBanListInputSchema.js';
import { KanBanCardScalarWhereInputSchema } from './KanBanCardScalarWhereInputSchema.js';
export const KanBanCardUpdateManyWithoutKanBanListNestedInputSchema = z.object({
    create: z.union([z.lazy(() => KanBanCardCreateWithoutKanBanListInputSchema), z.lazy(() => KanBanCardCreateWithoutKanBanListInputSchema).array(), z.lazy(() => KanBanCardUncheckedCreateWithoutKanBanListInputSchema), z.lazy(() => KanBanCardUncheckedCreateWithoutKanBanListInputSchema).array()]).optional(),
    connectOrCreate: z.union([z.lazy(() => KanBanCardCreateOrConnectWithoutKanBanListInputSchema), z.lazy(() => KanBanCardCreateOrConnectWithoutKanBanListInputSchema).array()]).optional(),
    upsert: z.union([z.lazy(() => KanBanCardUpsertWithWhereUniqueWithoutKanBanListInputSchema), z.lazy(() => KanBanCardUpsertWithWhereUniqueWithoutKanBanListInputSchema).array()]).optional(),
    createMany: z.lazy(() => KanBanCardCreateManyKanBanListInputEnvelopeSchema).optional(),
    set: z.union([z.lazy(() => KanBanCardWhereUniqueInputSchema), z.lazy(() => KanBanCardWhereUniqueInputSchema).array()]).optional(),
    disconnect: z.union([z.lazy(() => KanBanCardWhereUniqueInputSchema), z.lazy(() => KanBanCardWhereUniqueInputSchema).array()]).optional(),
    delete: z.union([z.lazy(() => KanBanCardWhereUniqueInputSchema), z.lazy(() => KanBanCardWhereUniqueInputSchema).array()]).optional(),
    connect: z.union([z.lazy(() => KanBanCardWhereUniqueInputSchema), z.lazy(() => KanBanCardWhereUniqueInputSchema).array()]).optional(),
    update: z.union([z.lazy(() => KanBanCardUpdateWithWhereUniqueWithoutKanBanListInputSchema), z.lazy(() => KanBanCardUpdateWithWhereUniqueWithoutKanBanListInputSchema).array()]).optional(),
    updateMany: z.union([z.lazy(() => KanBanCardUpdateManyWithWhereWithoutKanBanListInputSchema), z.lazy(() => KanBanCardUpdateManyWithWhereWithoutKanBanListInputSchema).array()]).optional(),
    deleteMany: z.union([z.lazy(() => KanBanCardScalarWhereInputSchema), z.lazy(() => KanBanCardScalarWhereInputSchema).array()]).optional(),
}).strict();
export default KanBanCardUpdateManyWithoutKanBanListNestedInputSchema;
