import { z } from 'zod';
import { MdxNoteCreateWithoutTopicsInputSchema } from './MdxNoteCreateWithoutTopicsInputSchema.js';
import { MdxNoteUncheckedCreateWithoutTopicsInputSchema } from './MdxNoteUncheckedCreateWithoutTopicsInputSchema.js';
import { MdxNoteCreateOrConnectWithoutTopicsInputSchema } from './MdxNoteCreateOrConnectWithoutTopicsInputSchema.js';
import { MdxNoteUpsertWithWhereUniqueWithoutTopicsInputSchema } from './MdxNoteUpsertWithWhereUniqueWithoutTopicsInputSchema.js';
import { MdxNoteWhereUniqueInputSchema } from './MdxNoteWhereUniqueInputSchema.js';
import { MdxNoteUpdateWithWhereUniqueWithoutTopicsInputSchema } from './MdxNoteUpdateWithWhereUniqueWithoutTopicsInputSchema.js';
import { MdxNoteUpdateManyWithWhereWithoutTopicsInputSchema } from './MdxNoteUpdateManyWithWhereWithoutTopicsInputSchema.js';
import { MdxNoteScalarWhereInputSchema } from './MdxNoteScalarWhereInputSchema.js';
export const MdxNoteUpdateManyWithoutTopicsNestedInputSchema = z.object({
    create: z.union([z.lazy(() => MdxNoteCreateWithoutTopicsInputSchema), z.lazy(() => MdxNoteCreateWithoutTopicsInputSchema).array(), z.lazy(() => MdxNoteUncheckedCreateWithoutTopicsInputSchema), z.lazy(() => MdxNoteUncheckedCreateWithoutTopicsInputSchema).array()]).optional(),
    connectOrCreate: z.union([z.lazy(() => MdxNoteCreateOrConnectWithoutTopicsInputSchema), z.lazy(() => MdxNoteCreateOrConnectWithoutTopicsInputSchema).array()]).optional(),
    upsert: z.union([z.lazy(() => MdxNoteUpsertWithWhereUniqueWithoutTopicsInputSchema), z.lazy(() => MdxNoteUpsertWithWhereUniqueWithoutTopicsInputSchema).array()]).optional(),
    set: z.union([z.lazy(() => MdxNoteWhereUniqueInputSchema), z.lazy(() => MdxNoteWhereUniqueInputSchema).array()]).optional(),
    disconnect: z.union([z.lazy(() => MdxNoteWhereUniqueInputSchema), z.lazy(() => MdxNoteWhereUniqueInputSchema).array()]).optional(),
    delete: z.union([z.lazy(() => MdxNoteWhereUniqueInputSchema), z.lazy(() => MdxNoteWhereUniqueInputSchema).array()]).optional(),
    connect: z.union([z.lazy(() => MdxNoteWhereUniqueInputSchema), z.lazy(() => MdxNoteWhereUniqueInputSchema).array()]).optional(),
    update: z.union([z.lazy(() => MdxNoteUpdateWithWhereUniqueWithoutTopicsInputSchema), z.lazy(() => MdxNoteUpdateWithWhereUniqueWithoutTopicsInputSchema).array()]).optional(),
    updateMany: z.union([z.lazy(() => MdxNoteUpdateManyWithWhereWithoutTopicsInputSchema), z.lazy(() => MdxNoteUpdateManyWithWhereWithoutTopicsInputSchema).array()]).optional(),
    deleteMany: z.union([z.lazy(() => MdxNoteScalarWhereInputSchema), z.lazy(() => MdxNoteScalarWhereInputSchema).array()]).optional(),
}).strict();
export default MdxNoteUpdateManyWithoutTopicsNestedInputSchema;
