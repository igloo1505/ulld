import { z } from 'zod';
import { MdxNoteCreateWithoutReadingListInputSchema } from './MdxNoteCreateWithoutReadingListInputSchema.js';
import { MdxNoteUncheckedCreateWithoutReadingListInputSchema } from './MdxNoteUncheckedCreateWithoutReadingListInputSchema.js';
import { MdxNoteCreateOrConnectWithoutReadingListInputSchema } from './MdxNoteCreateOrConnectWithoutReadingListInputSchema.js';
import { MdxNoteUpsertWithWhereUniqueWithoutReadingListInputSchema } from './MdxNoteUpsertWithWhereUniqueWithoutReadingListInputSchema.js';
import { MdxNoteWhereUniqueInputSchema } from './MdxNoteWhereUniqueInputSchema.js';
import { MdxNoteUpdateWithWhereUniqueWithoutReadingListInputSchema } from './MdxNoteUpdateWithWhereUniqueWithoutReadingListInputSchema.js';
import { MdxNoteUpdateManyWithWhereWithoutReadingListInputSchema } from './MdxNoteUpdateManyWithWhereWithoutReadingListInputSchema.js';
import { MdxNoteScalarWhereInputSchema } from './MdxNoteScalarWhereInputSchema.js';
export const MdxNoteUncheckedUpdateManyWithoutReadingListNestedInputSchema = z.object({
    create: z.union([z.lazy(() => MdxNoteCreateWithoutReadingListInputSchema), z.lazy(() => MdxNoteCreateWithoutReadingListInputSchema).array(), z.lazy(() => MdxNoteUncheckedCreateWithoutReadingListInputSchema), z.lazy(() => MdxNoteUncheckedCreateWithoutReadingListInputSchema).array()]).optional(),
    connectOrCreate: z.union([z.lazy(() => MdxNoteCreateOrConnectWithoutReadingListInputSchema), z.lazy(() => MdxNoteCreateOrConnectWithoutReadingListInputSchema).array()]).optional(),
    upsert: z.union([z.lazy(() => MdxNoteUpsertWithWhereUniqueWithoutReadingListInputSchema), z.lazy(() => MdxNoteUpsertWithWhereUniqueWithoutReadingListInputSchema).array()]).optional(),
    set: z.union([z.lazy(() => MdxNoteWhereUniqueInputSchema), z.lazy(() => MdxNoteWhereUniqueInputSchema).array()]).optional(),
    disconnect: z.union([z.lazy(() => MdxNoteWhereUniqueInputSchema), z.lazy(() => MdxNoteWhereUniqueInputSchema).array()]).optional(),
    delete: z.union([z.lazy(() => MdxNoteWhereUniqueInputSchema), z.lazy(() => MdxNoteWhereUniqueInputSchema).array()]).optional(),
    connect: z.union([z.lazy(() => MdxNoteWhereUniqueInputSchema), z.lazy(() => MdxNoteWhereUniqueInputSchema).array()]).optional(),
    update: z.union([z.lazy(() => MdxNoteUpdateWithWhereUniqueWithoutReadingListInputSchema), z.lazy(() => MdxNoteUpdateWithWhereUniqueWithoutReadingListInputSchema).array()]).optional(),
    updateMany: z.union([z.lazy(() => MdxNoteUpdateManyWithWhereWithoutReadingListInputSchema), z.lazy(() => MdxNoteUpdateManyWithWhereWithoutReadingListInputSchema).array()]).optional(),
    deleteMany: z.union([z.lazy(() => MdxNoteScalarWhereInputSchema), z.lazy(() => MdxNoteScalarWhereInputSchema).array()]).optional(),
}).strict();
export default MdxNoteUncheckedUpdateManyWithoutReadingListNestedInputSchema;
