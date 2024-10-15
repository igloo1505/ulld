import { z } from 'zod';
import { MdxNoteCreateWithoutSubjectsInputSchema } from './MdxNoteCreateWithoutSubjectsInputSchema.js';
import { MdxNoteUncheckedCreateWithoutSubjectsInputSchema } from './MdxNoteUncheckedCreateWithoutSubjectsInputSchema.js';
import { MdxNoteCreateOrConnectWithoutSubjectsInputSchema } from './MdxNoteCreateOrConnectWithoutSubjectsInputSchema.js';
import { MdxNoteUpsertWithWhereUniqueWithoutSubjectsInputSchema } from './MdxNoteUpsertWithWhereUniqueWithoutSubjectsInputSchema.js';
import { MdxNoteWhereUniqueInputSchema } from './MdxNoteWhereUniqueInputSchema.js';
import { MdxNoteUpdateWithWhereUniqueWithoutSubjectsInputSchema } from './MdxNoteUpdateWithWhereUniqueWithoutSubjectsInputSchema.js';
import { MdxNoteUpdateManyWithWhereWithoutSubjectsInputSchema } from './MdxNoteUpdateManyWithWhereWithoutSubjectsInputSchema.js';
import { MdxNoteScalarWhereInputSchema } from './MdxNoteScalarWhereInputSchema.js';
export const MdxNoteUncheckedUpdateManyWithoutSubjectsNestedInputSchema = z.object({
    create: z.union([z.lazy(() => MdxNoteCreateWithoutSubjectsInputSchema), z.lazy(() => MdxNoteCreateWithoutSubjectsInputSchema).array(), z.lazy(() => MdxNoteUncheckedCreateWithoutSubjectsInputSchema), z.lazy(() => MdxNoteUncheckedCreateWithoutSubjectsInputSchema).array()]).optional(),
    connectOrCreate: z.union([z.lazy(() => MdxNoteCreateOrConnectWithoutSubjectsInputSchema), z.lazy(() => MdxNoteCreateOrConnectWithoutSubjectsInputSchema).array()]).optional(),
    upsert: z.union([z.lazy(() => MdxNoteUpsertWithWhereUniqueWithoutSubjectsInputSchema), z.lazy(() => MdxNoteUpsertWithWhereUniqueWithoutSubjectsInputSchema).array()]).optional(),
    set: z.union([z.lazy(() => MdxNoteWhereUniqueInputSchema), z.lazy(() => MdxNoteWhereUniqueInputSchema).array()]).optional(),
    disconnect: z.union([z.lazy(() => MdxNoteWhereUniqueInputSchema), z.lazy(() => MdxNoteWhereUniqueInputSchema).array()]).optional(),
    delete: z.union([z.lazy(() => MdxNoteWhereUniqueInputSchema), z.lazy(() => MdxNoteWhereUniqueInputSchema).array()]).optional(),
    connect: z.union([z.lazy(() => MdxNoteWhereUniqueInputSchema), z.lazy(() => MdxNoteWhereUniqueInputSchema).array()]).optional(),
    update: z.union([z.lazy(() => MdxNoteUpdateWithWhereUniqueWithoutSubjectsInputSchema), z.lazy(() => MdxNoteUpdateWithWhereUniqueWithoutSubjectsInputSchema).array()]).optional(),
    updateMany: z.union([z.lazy(() => MdxNoteUpdateManyWithWhereWithoutSubjectsInputSchema), z.lazy(() => MdxNoteUpdateManyWithWhereWithoutSubjectsInputSchema).array()]).optional(),
    deleteMany: z.union([z.lazy(() => MdxNoteScalarWhereInputSchema), z.lazy(() => MdxNoteScalarWhereInputSchema).array()]).optional(),
}).strict();
export default MdxNoteUncheckedUpdateManyWithoutSubjectsNestedInputSchema;
