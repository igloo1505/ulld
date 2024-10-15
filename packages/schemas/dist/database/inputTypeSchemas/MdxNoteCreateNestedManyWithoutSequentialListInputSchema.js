import { z } from 'zod';
import { MdxNoteCreateWithoutSequentialListInputSchema } from './MdxNoteCreateWithoutSequentialListInputSchema.js';
import { MdxNoteUncheckedCreateWithoutSequentialListInputSchema } from './MdxNoteUncheckedCreateWithoutSequentialListInputSchema.js';
import { MdxNoteCreateOrConnectWithoutSequentialListInputSchema } from './MdxNoteCreateOrConnectWithoutSequentialListInputSchema.js';
import { MdxNoteCreateManySequentialListInputEnvelopeSchema } from './MdxNoteCreateManySequentialListInputEnvelopeSchema.js';
import { MdxNoteWhereUniqueInputSchema } from './MdxNoteWhereUniqueInputSchema.js';
export const MdxNoteCreateNestedManyWithoutSequentialListInputSchema = z.object({
    create: z.union([z.lazy(() => MdxNoteCreateWithoutSequentialListInputSchema), z.lazy(() => MdxNoteCreateWithoutSequentialListInputSchema).array(), z.lazy(() => MdxNoteUncheckedCreateWithoutSequentialListInputSchema), z.lazy(() => MdxNoteUncheckedCreateWithoutSequentialListInputSchema).array()]).optional(),
    connectOrCreate: z.union([z.lazy(() => MdxNoteCreateOrConnectWithoutSequentialListInputSchema), z.lazy(() => MdxNoteCreateOrConnectWithoutSequentialListInputSchema).array()]).optional(),
    createMany: z.lazy(() => MdxNoteCreateManySequentialListInputEnvelopeSchema).optional(),
    connect: z.union([z.lazy(() => MdxNoteWhereUniqueInputSchema), z.lazy(() => MdxNoteWhereUniqueInputSchema).array()]).optional(),
}).strict();
export default MdxNoteCreateNestedManyWithoutSequentialListInputSchema;
