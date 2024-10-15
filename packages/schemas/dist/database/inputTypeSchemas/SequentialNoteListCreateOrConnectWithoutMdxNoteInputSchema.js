import { z } from 'zod';
import { SequentialNoteListWhereUniqueInputSchema } from './SequentialNoteListWhereUniqueInputSchema.js';
import { SequentialNoteListCreateWithoutMdxNoteInputSchema } from './SequentialNoteListCreateWithoutMdxNoteInputSchema.js';
import { SequentialNoteListUncheckedCreateWithoutMdxNoteInputSchema } from './SequentialNoteListUncheckedCreateWithoutMdxNoteInputSchema.js';
export const SequentialNoteListCreateOrConnectWithoutMdxNoteInputSchema = z.object({
    where: z.lazy(() => SequentialNoteListWhereUniqueInputSchema),
    create: z.union([z.lazy(() => SequentialNoteListCreateWithoutMdxNoteInputSchema), z.lazy(() => SequentialNoteListUncheckedCreateWithoutMdxNoteInputSchema)]),
}).strict();
export default SequentialNoteListCreateOrConnectWithoutMdxNoteInputSchema;
